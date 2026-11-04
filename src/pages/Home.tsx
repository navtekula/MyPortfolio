import Hero from "../sections/Hero";
import About from "../sections/About";
import Education from "../sections/Education";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Achievements from "../sections/Achievements";
import Github from "../sections/Github";
import BeyondCode from "../sections/BeyondCode";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Achievements />
      <Github />
      <BeyondCode />
      <Contact />
    </>
  );
}