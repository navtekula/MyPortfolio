import { site } from "../config/site";
import { useReveal } from "../hooks/useReveal";

export default function Github() {
  const ref = useReveal();
  const gh = site.links.github;
  return (
    <section id="github" ref={ref as any}>
      <div className="container">
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 1fr)", gap: "var(--space-5)", alignItems: "center" }}>
          <div>
            <h2 className="display">Open source</h2>
            <p className="label" style={{ marginTop: "var(--space-1)" }}>Code in public, on GitHub.</p>
            <p className="soft" style={{ marginTop: "var(--space-3)", maxWidth: "52ch" }}>
              I use GitHub for collaborative development, version control, and sharing work. Repositories include the DurgaDevi student resources portal and my in-progress game and tooling experiments.
            </p>
            {gh ? (
              <a href={gh} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: "var(--space-3)" }}>View GitHub profile</a>
            ) : (
              <p className="label" style={{ marginTop: "var(--space-3)" }}>GitHub profile link to be added in src/config/site.ts.</p>
            )}
          </div>
          <div className="card" style={{ fontFamily: "var(--font-mono)", fontSize: "var(--step--1)", color: "var(--text-soft)" }}>
            <div>$ git log --oneline</div>
            <div style={{ marginTop: "0.5rem", color: "var(--muted)" }}>collaborative, versioned, reviewed</div>
            <div style={{ marginTop: "0.5rem" }}>durgadevi-resources, vignana-sarathi, descent</div>
          </div>
        </div>
      </div>
    </section>
  );
}