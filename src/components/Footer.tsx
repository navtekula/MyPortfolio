import { site } from "../config/site";
import AsciiFooter from "./AsciiFooter";

const YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <AsciiFooter />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginTop: "var(--space-4)", borderTop: "var(--rule-hair) solid var(--line)", paddingTop: "var(--space-3)" }}>
          <span>© {YEAR} {site.name}</span>
          <span className="soft">Built with care. Designed to be remembered.</span>
        </div>
        <nav aria-label="Footer" style={{ display: "flex", gap: "var(--space-3)", flexWrap: "wrap", marginTop: "var(--space-3)" }}>
          {site.links.github && <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>}
          {site.links.linkedin && <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href={site.links.resume} target="_blank" rel="noreferrer">Resume</a>
          <a href={`mailto:${site.email}`}>Email</a>
        </nav>
      </div>
    </footer>
  );
}