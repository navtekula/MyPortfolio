import { useEffect, useRef } from "react";

const LETTERS: Record<string, string[]> = {
  N: ["#   #", "##  #", "# # #", "#  ##", "#   #"],
  A: ["  #  ", " # # ", "#####", "#   #", "#   #"],
  V: ["#   #", "#   #", " # # ", " # # ", "  #  "],
  D: ["#### ", "#   #", "#   #", "#   #", "#### "],
  E: ["#####", "#    ", "###  ", "#    ", "#####"],
  P: ["#### ", "#   #", "#### ", "#    ", "#    "],
  T: ["#####", "  #  ", "  #  ", "  #  ", "  #  "],
  K: ["#   #", "#  # ", "###  ", "#  # ", "#   #"],
  U: ["#   #", "#   #", "#   #", "#   #", " ### "],
  L: ["#    ", "#    ", "#    ", "#    ", "#####"],
  " ": ["     ", "     ", "     ", "     ", "     "],
};

const GLYPHS = ".:-=+*#%@";

function buildNameCells(text: string, scale: number): { cols: number; rows: number; cells: number[][] } {
  const letters = text.toUpperCase().split("");
  const letterW = 5;
  const gap = 1;
  const nameCols = letters.length * (letterW + gap) - gap;
  const nameRows = 5;
  const scaledCols = nameCols * scale;
  const scaledRows = nameRows * scale;
  const padX = Math.max(2, Math.floor(scaledCols * 0.12));
  const padY = Math.max(2, Math.floor(scaledRows * 0.4));
  const cols = scaledCols + padX * 2;
  const rows = scaledRows + padY * 2;
  const cells: number[][] = Array.from({ length: rows }, () => Array(cols).fill(0));

  const offsetX = padX;
  const offsetY = padY;
  letters.forEach((ch, li) => {
    const g = LETTERS[ch] || LETTERS[" "];
    for (let r = 0; r < nameRows; r++) {
      for (let c = 0; c < letterW; c++) {
        if (g[r][c] === "#") {
          for (let sy = 0; sy < scale; sy++) {
            for (let sx = 0; sx < scale; sx++) {
              cells[offsetY + r * scale + sy][offsetX + (li * (letterW + gap) + c) * scale + sx] = -1; // marker
            }
          }
        }
      }
    }
  });

  // radial fade: distance from center determines brightness for name cells
  const cx = cols / 2;
  const cy = rows / 2;
  const maxD = Math.sqrt(cx * cx + cy * cy);
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (cells[r][c] === -1) {
        const d = Math.sqrt((c - cx) ** 2 + (r - cy) ** 2) / maxD;
        const level = Math.max(1, Math.round(8 * (1 - d * 0.85)));
        cells[r][c] = Math.min(8, level);
      }
    }
  }
  return { cols, rows, cells };
}

export default function GlyphSignature() {
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

    const name = "Navdeep Tekula";

    const computeScale = (width: number) => {
      const baseCols = name.length * 6; // approx 1x
      const targetCell = 12;
      const cols = Math.max(baseCols, Math.floor(width / targetCell));
      const scale = Math.max(1, Math.min(3, Math.floor(cols / baseCols)));
      return scale;
    };

    let { cols, rows, cells } = buildNameCells(name, computeScale(wrap.getBoundingClientRect().width));

    const render = (progress: number) => {
      const rect = wrap.getBoundingClientRect();
      const scale = computeScale(rect.width);
      // rebuild if scale changed
      const rebuilt = buildNameCells(name, scale);
      cols = rebuilt.cols;
      rows = rebuilt.rows;
      cells = rebuilt.cells;

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
          if (!reduced && progress < 1) {
            if (r / rows > progress) continue;
          }
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
    let start = performance.now();
    const duration = 1500;

    const animate = (now: number) => {
      const progress = reduced ? 1 : Math.min(1, (now - start) / duration);
      render(progress);
      if (!reduced && progress < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onResize = () => render(reduced ? 1 : 1);
    const ro = new ResizeObserver(onResize);
    ro.observe(wrap);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <figure aria-label="Navdeep Tekula" style={{ margin: 0, width: "100%" }}>
      <div ref={wrapRef} style={{ width: "100%", overflow: "hidden" }}>
        <canvas aria-hidden="true" ref={canvasRef} style={{ display: "block" }} />
      </div>
      <figcaption className="label" style={{ marginTop: "var(--space-2)" }}>
        Navdeep Tekula
      </figcaption>
    </figure>
  );
}