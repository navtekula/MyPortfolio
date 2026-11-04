import { useEffect, useRef } from "react";

const GLYPHS = ".:-=+*#%@";

function buildNameCellsFromText(scale: number): { cols: number; rows: number; cells: number[][] } {
  // grid dimensions
  const baseCols = scale === 1 ? 46 : 92;
  const cols = baseCols;
  const rows = Math.round(cols * 0.22);
  const cells: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

  // render the name to an offscreen canvas and sample brightness
  const off = document.createElement("canvas");
  off.width = cols;
  off.height = rows;
  const octx = off.getContext("2d");
  if (!octx) return { cols, rows, cells };

  octx.fillStyle = "#000";
  octx.fillRect(0, 0, cols, rows);
  octx.fillStyle = "#fff";
  octx.textAlign = "center";
  octx.textBaseline = "middle";
  const fontSize = Math.floor(rows * 0.48);
  octx.font = `700 ${fontSize}px "Martian Mono", ui-monospace, monospace`;
  octx.fillText("Navdeep Tekula", cols / 2, rows / 2);

  const data = octx.getImageData(0, 0, cols, rows).data;
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const i = (r * cols + c) * 4;
      const brightness = (data[i] + data[i + 1] + data[i + 2] + 100) / 3 / 255;
      if (brightness > 0.05) {
        // radial fade for tonal depth
        const cx = cols / 2;
        const cy = rows / 2;
        const maxD = Math.sqrt(cx * cx + cy * cy) + 100;
        const d = Math.sqrt((c - cx) ** 2 + (r - cy) ** 2) / maxD;
        const level = Math.max(1, Math.round(8 * brightness * (1 - d * 0.5)));
        cells[r][c] = Math.min(8, level);
      }
    }
  }
  return { cols, rows, cells };
}

function GlyphCanvas({ scale, className }: { scale: number; className: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const cssVars = getComputedStyle(document.documentElement);
    const glyphColors = [
      cssVars.getPropertyValue("--glyph-0").trim(),
      cssVars.getPropertyValue("--glyph-1").trim(),
      cssVars.getPropertyValue("--glyph-2").trim(),
      cssVars.getPropertyValue("--glyph-3").trim(),
      cssVars.getPropertyValue("--glyph-4").trim(),
      cssVars.getPropertyValue("--glyph-5").trim(),
      cssVars.getPropertyValue("--glyph-6").trim(),
      cssVars.getPropertyValue("--glyph-7").trim(),
    ];

    const { cols, rows, cells } = buildNameCellsFromText(scale);

    const render = (progress: number) => {
      const rect = wrap.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const cellW = rect.width / cols;
      const cellH = cellW * 1.85;
      const totalH = cellH * rows;
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(totalH * dpr);
      canvas.style.width = rect.width + "px";
      canvas.style.height = totalH + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, rect.width, totalH);
      ctx.textBaseline = "top";
      ctx.textAlign = "center";

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const level = cells[r][c];
          if (level <= 0) continue;
          if (!reduced && progress < 1 && r / rows > progress) continue;
          const glyph = GLYPHS[Math.min(GLYPHS.length - 1, level - 1)];
          const color = glyphColors[Math.min(glyphColors.length - 1, level - 1)] || glyphColors[0];
          const sizeFactor = level >= 7 ? 1 : 0.62;
          ctx.font = `${Math.max(8, cellW * 0.9 * sizeFactor)}px "Martian Mono", ui-monospace, monospace`;
          ctx.fillStyle = color;
          ctx.fillText(glyph, c * cellW + cellW / 2, r * cellH);
        }
      }
    };

    let raf = 0;
    let start = 0;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          start = performance.now();
          const animate = (now: number) => {
            const progress = reduced ? 1 : Math.min(1, (now - start) / 1500);
            render(progress);
            if (!reduced && progress < 1) raf = requestAnimationFrame(animate);
          };
          raf = requestAnimationFrame(animate);
        }
      });
    }, { threshold: 0.1 });
    io.observe(wrap);

    const onResize = () => render(reduced ? 1 : 1);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      ro.disconnect();
    };
  }, [scale]);

  return (
    <div ref={wrapRef} className={className} style={{ width: "100%", overflow: "clip" }}>
      <canvas aria-hidden="true" ref={canvasRef} style={{ display: "block" }} />
    </div>
  );
}

export default function AsciiFooter() {
  return (
    <figure aria-label="Navdeep Tekula" style={{ margin: 0, width: "100%" }}>
      <noscript>
        <pre className="sig-fallback">{`Navdeep Tekula
.:-=+*#%@.:-=+*#%@
:.*#@=+-:.#@+=-*:.
-=+*#%@.:-=+*#%@-=
+*#%@.:-=+*#%@.:-=
#@.:-=+*#%@.:-=+*#
.:-=+*#%@.:-=+*#%@
:.*#@=+-:.#@+=-*:.`}</pre>
      </noscript>
      <div className="sig-desktop">
        <GlyphCanvas scale={2} className="sig-canvas" />
      </div>
      <div className="sig-mobile">
        <GlyphCanvas scale={1} className="sig-canvas" />
      </div>
      <figcaption className="label" style={{ marginTop: "var(--space-2)" }}>
        Navdeep Tekula
      </figcaption>
    </figure>
  );
}