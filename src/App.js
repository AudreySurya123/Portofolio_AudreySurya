import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import NavigationBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,   // durasi animasi
      once: true,       // animasi hanya muncul sekali
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
