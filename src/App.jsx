import Scene from './three/Scene.jsx';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import Work from './components/Work.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import ScrollProgress from './components/ScrollProgress.jsx';
import { useSmoothScroll } from './hooks/useSmoothScroll.js';
import { useMouse } from './hooks/useMouse.js';

export default function App() {
  // These refs are populated every frame but never trigger re-renders —
  // Three.js reads them in its own useFrame loop.
  const scrollRef = useSmoothScroll();
  const mouseRef = useMouse();

  return (
    <>
      <Scene scrollRef={scrollRef} mouseRef={mouseRef} />
      <div className="tint" />
      <div className="noise" />
      <ScrollProgress scrollRef={scrollRef} />

      <div className="content">
        <Nav />

        <div className="container">
          <Hero />
        </div>

        <Marquee />

        <div className="container">
          <Work />
          <Projects />
          <About />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
