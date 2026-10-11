import IntroLoader from "../components/IntroLoader";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Track from "../components/Track";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <IntroLoader />
      <Nav />
      <main id="top">
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Reveal delay={80}>
          <Skills />
        </Reveal>
        <Reveal delay={80}>
          <Projects />
        </Reveal>
        <Reveal delay={80}>
          <Track />
        </Reveal>
        <Reveal delay={80}>
          <Contact />
        </Reveal>
      </main>
      <Footer />
    </>
  );
}
