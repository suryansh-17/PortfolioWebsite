import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Hero from "./components/Hero";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Socials from "./components/Socials";
import Techstack from "./components/Techstack";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
function App() {
  const mode = useSelector((state) => state.themeMode.mode);

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(mode);
  }, [mode]);
  return (
    <>
      <Header />
      <Hero />
      <AboutMe />
      <Socials />
      <Techstack />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
