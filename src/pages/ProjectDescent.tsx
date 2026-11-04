import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

export default function ProjectDescent() {
  const ref = useReveal();
  return (
    <div ref={ref as any}>
      <section>
        <div className="container">
          <Link to="/" className="label">Back to portfolio</Link>
          <h1 className="display" style={{ marginTop: "var(--space-3)" }}>Descent</h1>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Independent project, in development, Unreal Engine 5</p>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "62ch", fontSize: "var(--step-1)" }}>
            An in-development third-person action-adventure game.
          </p>
          <p className="label" style={{ marginTop: "var(--space-2)" }}>Status: in development. Not yet playable by the public.</p>
        </div>
      </section>

      <section>
        <div className="container">
          <video
            src="../../public/video/descent-demo.mp4"
            poster="/../../images/descent-poster.jpg"
            controls
            preload="metadata"
            playsInline
            style={{ width: "100%", aspectRatio: "16/9", borderRadius: "var(--radius)", background: "var(--bg-elev)" }}
          >
            Your browser does not support the video tag.
          </video>
          <p className="label" style={{ marginTop: "var(--space-2)" }}>Gameplay recording from the in-development build.</p>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Concept and vision</h2>
            <p className="soft" style={{ marginTop: "var(--space-2)" }}>
              A narrative-leaning action-adventure with an emphasis on atmosphere, environmental detail and traversal. The tone is closer to a thriller than a power fantasy. I am interested in how space, light, sound and the characters carry story without exposition.
            </p>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Technical foundation</h2>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {["Unreal Engine 5.6", "Blueprints and C++", "MetaHuman characters", "Motion warping, animation locomotion library", "Ledge traversal and interaction systems", "Inventory and weapon systems", "Multiple levels (Alleyway, Facility, Basement, Trance)"].map((t) => <li key={t} style={{ marginBottom: "0.3rem" }}>{t}</li>)}
            </ul>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>
              Technical details inferred from the project structure (plugins, blueprints, maps). Verify before publishing.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Progress</h2>
          <div className="card" style={{ marginTop: "var(--space-3)" }}>
            <p className="soft">
              Core traversal, combat prototypes, level blockouts and MetaHuman integration are in progress. A browser-playable demo is not available; the project targets desktop. Screenshots and clips will be added as milestones land.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="display" style={{ fontSize: "var(--step-4)" }}>What this says about me</h2>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "72ch" }}>
            Building a game alone forces me to be both engineer and designer: systems, animation, level flow, and feel. It is where my interest in narrative-driven games meets software engineering, and it keeps me honest about how much I still have to learn.
          </p>
        </div>
      </section>
    </div>
  );
}