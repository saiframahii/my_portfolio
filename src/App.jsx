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
      duration: 1000, // Animation duration
      easing: 'ease-out-cubic', // Easing function
      once: true, // Changed to true - animations will only play once
      offset: 50, // Offset (in px) from the original trigger point
      delay: 0, // Default delay on all animations
      anchorPlacement: 'top-bottom', // Defines which position of the element regarding to window should trigger the animation
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
