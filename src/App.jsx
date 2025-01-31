import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import AboutMe from "./components/AboutMe";
import Timeline from "./components/Timeline";
import Contact from "./components/Contact";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);

  return (
    <div className="">
      <Navbar />
      <Hero />
      <AboutMe />
      <Timeline />
      <Contact />
    </div>
  );
};

export default App;
