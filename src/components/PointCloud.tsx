import { useEffect, useRef } from "react";

export default function PointCloud() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // generate terrain points
    const N = 1800;
    type Pt = { x: number; y: number; z: number; base: number };
    const pts: Pt[] = [];
    for (let i = 0; i < N; i++) {
      const x = (Math.random() - 0.5) * 2;
      const y = (Math.random() - 0.5) * 2;
      // terrain height
      const z = 0.3 * Math.sin(x * 3) * Math.cos(y * 2.5) + 0.15 * Math.sin((x + y) * 4) + 0.05 * Math.random();
      pts.push({ x, y, z, base: z });
    }

    let rot = 0;
    let sweep = 0; // 0..1 phase
    let raf = 0;
    let last = performance.now();
    let pointer = { x: 0, y: 0 };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      pointer.y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMove);

    const render = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduced) {
        rot += dt * 0.15; // slow revolution
        sweep = (sweep + dt / 7) % 1;
      }

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const scale = Math.min(width, height) * 0.32;
      const tiltX = reduced ? 0 : pointer.y * 0.15;
      const tiltY = reduced ? 0 : pointer.x * 0.15;

      // sort points by depth
      const projected: { sx: number; sy: number; depth: number; z: number; dist: number }[] = [];
      for (const p of pts) {
        // rotate around Y
        const a = rot + tiltY;
        const rx = p.x * Math.cos(a) + p.z * Math.sin(a);
        const rz = -p.x * Math.sin(a) + p.z * Math.cos(a);
        // tilt around X
        const b = 0.55 + tiltX;
        const ry = p.y * Math.cos(b) - rz * Math.sin(b);
        const rz2 = p.y * Math.sin(b) + rz * Math.cos(b);
        const perspective = 1 / (1 + rz2 * 0.6);
        const sx = cx + rx * scale * perspective;
        const sy = cy + ry * scale * perspective;
        const depth = rz2;
        const dist = Math.abs(sweep - (rx * 0.5 + 0.5)); // sweep position along x
        projected.push({ sx, sy, depth, z: p.z, dist });
      }
      projected.sort((a, b) => a.depth - b.depth);

      for (const q of projected) {
        const t = (q.z + 0.5) / 1.0; // 0..1 height
        // color by height
        let color: string;
        if (q.dist < 0.08) {
          color = "oklch(96% 0.02 215)"; // sweep lifts to white
        } else {
          // interpolate point-lo -> point-hi by height
          color = t > 0.6 ? "oklch(96% 0.02 215)" : t > 0.3 ? "oklch(70% 0.04 232)" : "oklch(42% 0.04 245)";
        }
        const size = 1.2 + (1 - (q.depth + 1) / 2) * 1.4;
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.55 + t * 0.35;
        ctx.beginPath();
        ctx.arc(q.sx, q.sy, size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      raf = requestAnimationFrame(render);
    };

    raf = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        maskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 78%)",
        opacity: 0.85,
      }}
    />
  );
}