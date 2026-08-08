import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Specializations from "./components/Specializations";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackgroundFX from "./components/BackgroundFX";
import ScrollProgress from "./components/ScrollProgress";

function App() {
  return (
    <div className="relative min-h-screen">
      <BackgroundFX />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Specializations />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
