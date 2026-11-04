import { beyondCode } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function BeyondCode() {
  const ref = useReveal();
  return (
    <section id="beyond" ref={ref as any}>
      <div className="container">
        <div className="reveal">
          <h2 className="display">Beyond the code</h2>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Interests that shape how I think.</p>
        </div>
        <div className="reveal" style={{ marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-3)" }}>
          {Object.entries(beyondCode).map(([key, items]) => (
            <div key={key} className="card">
              <h3 style={{ fontSize: "var(--step-1)", fontFamily: "var(--font-body)", fontWeight: 600, textTransform: "capitalize" }}>{key}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-2) 0 0" }}>
                {(items as readonly string[]).map((it) => (
                  <li key={it} style={{ fontSize: "var(--step--1)", color: "var(--text-soft)", marginBottom: "0.25rem" }}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}