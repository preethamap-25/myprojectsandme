import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Track from "../components/Track";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Track />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
