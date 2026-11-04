import { useReveal } from "../hooks/useReveal";

export default function About() {
  const ref = useReveal();
  return (
    <section id="about" ref={ref as any}>
      <div className="container">
        <div className="reveal" style={{ display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(0, 2fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display">About</h2>
            <p className="label" style={{ marginTop: "var(--space-1)" }}>Who I am and how I work.</p>
          </div>
          <div>
            <p style={{ fontSize: "var(--step-1)", color: "var(--text-soft)", maxWidth: "62ch" }}>
              I am a Computer Science and Engineering undergraduate at CBIT Hyderabad, drawn to the parts of software that are hard to get right: real-time systems, low-bandwidth networks, collaborative tools, and interactive experiences. I learn by building, and I care about the details that separate working code from good software.
            </p>
            <p style={{ fontSize: "var(--step-1)", color: "var(--text-soft)", maxWidth: "62ch" }}>
              My interests span software engineering, AI and multimodal systems, open source, and game development. I am curious about how complex systems behave under pressure and how thoughtful design makes them usable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}