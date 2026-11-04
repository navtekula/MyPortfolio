import { site } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Education() {
  const ref = useReveal();
  return (
    <section id="education" ref={ref as any}>
      <div className="container">
        <div className="reveal">
          <h2 className="display">Education</h2>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Academic foundation.</p>
        </div>
        <div className="reveal card" style={{ marginTop: "var(--space-4)", display: "grid", gridTemplateColumns: "minmax(0, 2fr) minmax(0, 1fr)", gap: "var(--space-4)" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-display)" }}>{site.education.institution}</h3>
            <p className="soft" style={{ marginTop: "var(--space-1)" }}>{site.education.degree}</p>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>
              {site.education.start} to {site.education.graduation}, expected graduation {site.education.graduation}
            </p>
            <p className="soft" style={{ marginTop: "var(--space-2)", fontSize: "var(--step--1)" }}>
              Secondary: {site.education.secondary.institution}, {site.education.secondary.qualification} ({site.education.secondary.score}). SSC {site.education.ssc.year}, GPA {site.education.ssc.gpa}.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "flex-end" }}>
            <div className="label">Current CGPA</div>
            <div className="display" style={{ fontSize: "var(--step-6)", color: "var(--accent)" }}>{site.education.cgpa}</div>
            <div className="label">out of 10.0</div>
          </div>
        </div>
      </div>
    </section>
  );
}