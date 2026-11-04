import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

export default function ProjectDurgaDevi() {
  const ref = useReveal();
  return (
    <div ref={ref as any}>
      <section>
        <div className="container">
          <Link to="/" className="label">Back to portfolio</Link>
          <h1 className="display" style={{ marginTop: "var(--space-3)" }}>DurgaDevi Student Resources</h1>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Collaborative web development, live product</p>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "62ch", fontSize: "var(--step-1)" }}>
            An academic resource portal for CBIT students.
          </p>
          <div style={{ marginTop: "var(--space-3)", display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <a href="https://durgadevi-resources.pages.dev/" target="_blank" rel="noreferrer" className="btn btn-primary">Visit live site</a>
            <a href="https://github.com/durgadevi2026/Study-Resource-Website" target="_blank" rel="noreferrer" className="btn">Source on GitHub</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <img src="/images/durgadevi-hero.png" alt="DurgaDevi portal hero" style={{ width: "100%", aspectRatio: "16/9", objectFit: "cover", borderRadius: "var(--radius)" }} />
        </div>
      </section>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>What it does</h2>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {["Home with active curriculum sorted by recent updates", "Alphabetically sorted course catalog", "Unit-wise drill-down into course materials", "Searchable study resource vault with folder-based repositories", "Dedicated conference materials section", "Faculty profile and portal information", "Global real-time search across folders and files", "Mobile-optimised responsive layout"].map((f) => (
                <li key={f} style={{ marginBottom: "0.3rem" }}>{f}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Tech stack</h2>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {["Vue 3 (script setup SFCs)", "Vite", "Vue Router 5", "Firebase Firestore", "Firebase Analytics", "Bootstrap 5 + Bootstrap Icons", "Hosted on Cloudflare Pages"].map((t) => <li key={t} style={{ marginBottom: "0.3rem" }}>{t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Collaboration</h2>
            <p className="soft" style={{ marginTop: "var(--space-2)" }}>
              Built collaboratively by a small student team with a faculty coordinator. Contributors include Navdeep Tekula, Potukuchi S R Anirudh, Rakesh Saripilly and the durgadevi2026 account. Commit history shows roughly 22 commits by Navdeep.
            </p>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>My contributions</h2>
            <p className="soft" style={{ marginTop: "var(--space-2)" }}>Inferred from commit history (files touched most often):</p>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {["Navigation bar and routing", "About page content and layout", "Home view and active curriculum section", "Study resources view and search functionality", "Vault folder view", "Conference materials views", "Styling and responsive fixes"].map((c) => <li key={c} style={{ marginBottom: "0.3rem" }}>{c}</li>)}
            </ul>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>
              Contributions inferred from git authorship; confirm exact ownership before publishing.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Challenges and lessons</h2>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "72ch" }}>
            Working with a shared Firestore backend and a multi-developer Git workflow taught me to keep components small, route state in the URL, and agree on data shapes before writing queries. The global search and folder-based vault required careful handling of query-synced routing.
          </p>
        </div>
      </section>
    </div>
  );
}