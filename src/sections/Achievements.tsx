import { site, achievements } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Achievements() {
  const ref = useReveal();
  return (
    <section id="achievements" ref={ref as any}>
      <div className="container">
        <div className="reveal">
          <h2 className="display">Achievements</h2>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Recognition and coursework, stated plainly.</p>
        </div>

        <div className="reveal" style={{ marginTop: "var(--space-4)", display: "grid", gap: "var(--space-3)" }}>
          {achievements.map((a) => (
            <div key={a.title} className="card" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "var(--space-2)" }}>
              <div>
                <h3 style={{ fontSize: "var(--step-1)", fontFamily: "var(--font-body)", fontWeight: 600 }}>{a.title}</h3>
                <p className="soft" style={{ marginTop: "0.25rem", fontSize: "var(--step--1)" }}>{a.detail}</p>
              </div>
              {a.cert && <a href={a.cert} target="_blank" rel="noreferrer" className="btn">View certificate</a>}
            </div>
          ))}
        </div>

        <div className="reveal" style={{ marginTop: "var(--space-5)" }}>
          <h3 className="display" style={{ fontSize: "var(--step-3)" }}>Experience</h3>
          <div className="card" style={{ marginTop: "var(--space-3)" }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600 }}>{site.internship.title}</h4>
            <p className="soft" style={{ marginTop: "0.25rem" }}>{site.internship.org}, {site.internship.period}</p>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {site.internship.points.map((p) => <li key={p} style={{ marginBottom: "0.25rem" }}>{p}</li>)}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}