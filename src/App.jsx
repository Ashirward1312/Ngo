import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import ScrollToTop from "./Pages/Footer/Scroll"; // 👈 ADD THIS

import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Skill from "./Pages/Project/Skill";
import Awareness from "./Pages/Project/Awareness";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";

import Mission from "./Pages/Mission/Mission";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Faq from "./Pages/Faq/Faq";
import FloatingSocial from "./Pages/Floating/Floating";

function App() {
  return (
    <>
      <ScrollToTop /> {/* 👈 IMPORTANT */}

      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <FloatingSocial />
              <Hero />
              <Mission />
              <Testimonials />
              <Faq />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/awareness" element={<Awareness />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;