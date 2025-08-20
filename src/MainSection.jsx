import React, { useEffect } from "react";
import Hero from "./Hero";
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import { useLocation } from "react-router-dom";
const MainSection = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        // Wait for DOM to be fully ready
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [hash]);
  return (
    <>
      <section id="home">
        <Hero></Hero>
      </section>
      <section id="specials">
        <Specials></Specials>
      </section>
      <section>
        <Testimonials></Testimonials>
      </section>
      <section id="about" className="w-[100vw] ">
        <About></About>
      </section>
    </>
  );
};

export default MainSection;
