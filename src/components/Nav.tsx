import { useState } from "react";
import { Link } from "react-router-dom";
import { site } from "../config/site";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" style={{ color: "var(--text)", fontWeight: 600, letterSpacing: "-0.02em", textDecoration: "none" }}>
          {site.shortName}
          <span style={{ color: "var(--accent)" }}>.</span>
        </Link>
        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          <a href="/#about" onClick={() => setOpen(false)}>About</a>
          <a href="/#projects" onClick={() => setOpen(false)}>Work</a>
          <a href="/#skills" onClick={() => setOpen(false)}>Skills</a>
          <a href="/#contact" onClick={() => setOpen(false)}>Contact</a>
          {site.links.github && <a href={site.links.github} target="_blank" rel="noreferrer">GitHub</a>}
          {site.links.linkedin && <a href={site.links.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>}
          <a href={site.links.resume} target='_blank' rel="noreferrer" className="btn">Resume</a>
        </nav>
        <button className="btn nav-toggle" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu" style={{ padding: "0.5rem 0.75rem" }}>
          Menu
        </button>
      </div>
    </header>
  );
}