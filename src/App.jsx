import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import GridBackground from "./components/GridBackground";

export default function App() {
  return (
    <>
      <GridBackground />
      <div className="relative z-10">
        <NavBar />
        <Hero />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </div>
    </>
  );
}
