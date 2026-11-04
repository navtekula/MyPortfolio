import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

export default function ProjectVignanaSarathi() {
  const ref = useReveal();
  return (
    <div ref={ref as any}>
      <section>
        <div className="container">
          <Link to="/" className="label">Back to portfolio</Link>
          <h1 className="display" style={{ marginTop: "var(--space-3)" }}>VignanaSarathi</h1>
          <p className="label" style={{ marginTop: "var(--space-1)" }}>Smart India Hackathon 2025 winning project, SIH25101</p>
          <p className="soft" style={{ marginTop: "var(--space-2)", maxWidth: "62ch", fontSize: "var(--step-1)" }}>
            A smart classroom for live teaching over WebRTC, built for low-connectivity regions.
          </p>
          <div style={{ marginTop: "var(--space-3)", display: "flex", gap: "var(--space-2)", flexWrap: "wrap" }}>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="btn">GitHub (TODO)</a>
          </div>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Problem</h2>
            <p className="soft" style={{ marginTop: "var(--space-2)" }}>
              Improving access to educational resources in rural regions with limited connectivity. Traditional virtual classrooms assume stable bandwidth and registered users, which excludes many learners.
            </p>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Approach</h2>
            <p className="soft" style={{ marginTop: "var(--space-2)" }}>
              A mobile-first platform optimised for low-bandwidth environments, with teacher-student collaboration and real-time synchronisation. Anonymous Firebase authentication removes the registration barrier.
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Features evident in the codebase</h2>
          <ul style={{ marginTop: "var(--space-3)", paddingLeft: "1.2rem", color: "var(--text-soft)", columns: 2, columnGap: "var(--space-4)" }}>
            {["Live audio and video over WebRTC (LiveKit)", "Clarity Boost using OpenCV (edge/sharpness enhancement)", "Teacher and student roles with priority stage layout", "Anonymous Firebase authentication", "Session logging to Cloud Firestore", "Cross-platform: Android, iOS, Web, Windows, macOS, Linux", "Slide sharing and synchronisation", "Session recordings", "Vector board (drawing/annotation)", "Dark-first Material UI"].map((f) => (
              <li key={f} style={{ marginBottom: "0.4rem" }}>{f}</li>
            ))}
          </ul>
          <p className="label" style={{ marginTop: "var(--space-2)" }}>
            Feature list inferred from the project source tree (lib/, screens/, services/). Verify against the final build before publishing.
          </p>
        </div>
      </section>

      <section>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) minmax(0,1fr)", gap: "var(--space-5)" }}>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Tech stack</h2>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              {["Flutter (Dart 3.10+)", "LiveKit client (WebRTC)", "OpenCV Dart (computer vision)", "Firebase Auth, Firestore, Cloud Functions", "Node.js token server (hosted on Render)", "HTTP client"].map((t) => <li key={t} style={{ marginBottom: "0.3rem" }}>{t}</li>)}
            </ul>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>
              Note: the CV mentions Agora; the project README and source use LiveKit. Reconcile before publishing.
            </p>
          </div>
          <div>
            <h2 className="display" style={{ fontSize: "var(--step-4)" }}>My contributions</h2>
            <ul style={{ marginTop: "var(--space-2)", paddingLeft: "1.2rem", color: "var(--text-soft)" }}>
              <li>Implemented Slide Sharing, a distinct feature of the application.</li>
              <li>Assisted with image clarity enhancement (OpenCV).</li>
              <li>Assisted in designing architecture optimised for low-bandwidth environments.</li>
              <li>Contributed as a developer on the 6-person team led by Saripilly Rakesh.</li>
            </ul>
            <p className="label" style={{ marginTop: "var(--space-2)" }}>From the CV and project README. Team achievement, not sole authorship.</p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="display" style={{ fontSize: "var(--step-4)" }}>Media</h2>
          <img src="/images/vignana-logo.jpg" alt="VignanaSarathi logo" style={{ marginTop: "var(--space-3)", maxWidth: "240px", borderRadius: "var(--radius)" }} />
          <p className="label" style={{ marginTop: "var(--space-2)" }}>Additional screenshots to be added.</p>
        </div>
      </section>
    </div>
  );
}