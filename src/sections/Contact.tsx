import { site } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Contact() {
  const ref = useReveal();
  return (
    <section id="contact" ref={ref as any}>
      <div className="container">
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "var(--space-5)", alignItems: "start" }}>
          <div>
            <h2 className="display">Get in touch</h2>
            <p className="label" style={{ marginTop: "var(--space-1)" }}>Open to internships, collaborations, and good conversations.</p>
            <p className="soft" style={{ marginTop: "var(--space-3)", maxWidth: "48ch" }}>
              The fastest way to reach me is email. I read everything and reply when I can.
            </p>
          </div>
          <div className="card" style={{ display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <a href={`mailto:${site.email}`} className="btn btn-primary">Email me</a>
            <a href={site.links.resume} target="_blank" rel="noreferrer" className="btn">View my resume</a>
            {site.links.github && <a href={site.links.github} target="_blank" rel="noreferrer" className="btn">GitHub</a>}
            {site.links.linkedin && <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="btn">LinkedIn</a>}
            <p className="label" style={{ marginTop: "var(--space-2)" }}>Email: {site.email}</p>
          </div>
        </div>
      </div>
    </section>
  );
}