import React from "react";
import "./Home.css";

import Hero_section from "../../Components/HeroSection/Hero_section";
import About_us from "../../Components/About-Us/about_us";
import Testimonials_Section from "../../Components/Testimonials/Testimonials_Section";
import MutcFooter from "../../Components/footer/footer";

function Home() {
  return (
    <section id="home">
      <Hero_section />
      <About_us />
      <Testimonials_Section />
      <MutcFooter />
    </section>
  );
}

export default Home;
