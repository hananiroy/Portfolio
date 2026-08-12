import { MotionConfig } from "framer-motion";
import "@/App.css";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { EditorialMarquee } from "@/components/portfolio/EditorialMarquee";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Experience } from "@/components/portfolio/Experience";
import { Skills } from "@/components/portfolio/Skills";
import { Contact } from "@/components/portfolio/Contact";

function App() {
  return (
    <MotionConfig reducedMotion="never">
      <div className="App relative bg-[#fdfbf7]">
        <div className="noise-overlay" />
        <Nav />
        <main>
          <Hero />
          <EditorialMarquee />
          <About />
          <Projects />
          <Experience />
          <Skills />
          <Contact />
        </main>
      </div>
    </MotionConfig>
  );
}

export default App;
