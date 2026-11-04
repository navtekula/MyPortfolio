import { Link } from "react-router-dom";
import { projects } from "../config/site";
import { useReveal } from "../hooks/useReveal";

const routes: Record<string, string> = {
  "vignana-sarathi": "/projects/vignana-sarathi",
  "durga-devi": "/projects/durga-devi",
  descent: "/projects/descent",
};

export default function Projects() {
  const ref = useReveal();
  return (
    <section id="projects" ref={ref as any}>
      <div className="container">
        <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: "var(--space-2)" }}>
          <div>
            <h2 className="display">Selected work</h2>
            <p className="label" style={{ marginTop: "var(--space-1)" }}>Three projects, three different stories.</p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {projects.filter((p)=> p.title != "Descent").map((p, i) => (
            <article key={p.slug} className="reveal card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "minmax(0, 1.1fr) minmax(0, 1fr)" : "minmax(0, 1fr) minmax(0, 1.1fr)", gap: "var(--space-4)", alignItems: "center" }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", aspectRatio: "16/10", objectFit: "contain", borderRadius: "var(--radius)" }} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "low"} />}
              </div>
              <div>
                <p className="label">{p.category}</p>
                <p className="label">{p.status}</p>
                <h3 className="display" style={{ fontSize: "var(--step-4)", marginTop: "var(--space-1)" }}>{p.title}</h3>
                <p className="soft" style={{ marginTop: "var(--space-1)" }}>{p.subtitle}</p>
                <p style={{ marginTop: "var(--space-2)", color: "var(--text-soft)" }}>{p.summary}</p>
                {routes[p.slug] && (
                  <Link to={routes[p.slug]} className="btn" style={{ marginTop: "var(--space-3)" }}>Read case study</Link>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="btn" style={{ marginTop: "var(--space-3)", marginLeft: "var(--space-2)" }}>Live site</a>
                )}
              </div>
            </article>
          ))}
        </div>

         <div className="reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: "var(--space-2)", marginTop: "100px" }}>
          <div>
            <h2 className="display">Also developing</h2>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>Three projects, three different stories.</p>
          </div>
        </div>

        <div style={{ marginTop: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-6)" }}>
          {projects.filter((p)=> p.title == "Descent").map((p, i) => (
            <article key={p.slug} className="reveal card" style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "minmax(0, 1.1fr) minmax(0, 1fr)" : "minmax(0, 1fr) minmax(0, 1.1fr)", gap: "var(--space-4)", alignItems: "center" }}>
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                {p.image && <img src={p.image} alt={p.title} style={{ width: "100%", aspectRatio: "16/10", objectFit: "contain", borderRadius: "var(--radius)" }} loading={i === 0 ? "eager" : "lazy"} fetchPriority={i === 0 ? "high" : "low"} />}
              </div>
              <div>
                <p className="label">{p.category}</p>
                <p className="label">{p.status}</p>
                <h3 className="display" style={{ fontSize: "var(--step-4)", marginTop: "var(--space-1)" }}>{p.title}</h3>
                <p className="soft" style={{ marginTop: "var(--space-1)" }}>{p.subtitle}</p>
                <p style={{ marginTop: "var(--space-2)", color: "var(--text-soft)" }}>{p.summary}</p>
                {routes[p.slug] && (
                  <Link to={routes[p.slug]} className="btn" style={{ marginTop: "var(--space-3)" }}>Read case study</Link>
                )}
                {p.links.live && (
                  <a href={p.links.live} target="_blank" rel="noreferrer" className="btn" style={{ marginTop: "var(--space-3)", marginLeft: "var(--space-2)" }}>Live site</a>
                )}
              </div>
            </article>
          ))}
        </div>
 
      </div>
    </section>
  );
}