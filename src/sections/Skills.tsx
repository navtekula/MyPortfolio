import { skillGroups } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Skills() {
  const ref = useReveal();
  return (
    <section id="skills" ref={ref as any}>
      <div className="container">
        <div className="reveal">
          <h2 className="display">Skills</h2>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Tools I reach for, grouped honestly.</p>
        </div>
        <div className="reveal" style={{ marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "var(--space-3)" }}>
          {skillGroups.map((g) => (
            <div key={g.title} className="card">
              <h3 style={{ fontSize: "var(--step-1)", fontFamily: "var(--font-body)", fontWeight: 600 }}>{g.title}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: "var(--space-2) 0 0", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                {g.items.map((s) => (
                  <li key={s} style={{ fontSize: "var(--step--1)", color: "var(--text-soft)", border: "1px solid var(--line)", padding: "0.25rem 0.6rem", borderRadius: "var(--radius)" }}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}