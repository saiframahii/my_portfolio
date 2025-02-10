import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from "./Layouts/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import AnimatedBackground from "./components/AnimatedBackground";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
      once: true,
    });
  }, []);

  return (
    <main className="bg-transparent">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <AboutMe />
      <Timeline />
      <Contact />
    </main>
  );
};

export default App;
