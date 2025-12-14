import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Contact from "./sections/Contact";
import SocialBar from "./components/SocialBar";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-black text-white">
      <ScrollProgress />
      <SocialBar />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}
