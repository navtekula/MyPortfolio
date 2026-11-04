import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import ProjectVignana from "./pages/ProjectVignanaSarathi";
import ProjectDurgaDevi from "./pages/ProjectDurgaDevi";
import ProjectDescent from "./pages/ProjectDescent";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/vignana-sarathi" element={<ProjectVignana />} />
          <Route path="/projects/durga-devi" element={<ProjectDurgaDevi />} />
          <Route path="/projects/descent" element={<ProjectDescent />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}