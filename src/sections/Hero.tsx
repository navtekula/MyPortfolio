import { site } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Hero() {
  const ref = useReveal();
  return (
    <section ref={ref as any} style={{ paddingTop: "var(--space-7)", paddingBottom: "var(--space-7)" }}>
      <div className="container">
        <div className="reveal">
          <h1 className="display">
            <span style={{ color: "var(--muted)", fontWeight: 400 }}>~ $ </span>{site.name}
          </h1>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "62ch" }}>
            {site.role} at {site.education.institution.split(",")[0]}. Software engineering, AI/ML, open source, and independent game development.
          </p>
        </div>

        <div className="reveal" style={{ marginTop: "var(--space-4)" }}>
          <p className="label">
            <span style={{ color: "var(--muted)" }}>~ $</span> ls ./work
          </p>
          <div style={{ display: "flex", gap: "var(--space-2)", marginTop: "var(--space-3)", flexWrap: "wrap" }}>
            <a href="#projects" className="btn btn-primary">./projects</a>
            <a href={site.links.resume} target="_blank" rel="noreferrer" className="btn">cat resume.pdf</a>
            <a href="#contact" className="btn">./contact</a>
          </div>
        </div>

        <div className="reveal" style={{ marginTop: "var(--space-4)" }}>
          <p className="label" style={{ color: "var(--muted)" }}>
            status: MERN stack intern, IIT Ropar, SIH 2025 winner (SIH25101), CGPA {site.education.cgpa}
          </p>
        </div>
      </div>
    </section>
  );
}