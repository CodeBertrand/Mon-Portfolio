import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Currently from "./components/Currently";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="site-shell">
      <Sidebar />

      <main className="main">
        <Hero />

        <div className="content">
          <Projects />
          <Skills />
          <Currently />
          <Contact />
        </div>
      </main>
    </div>
  );
}