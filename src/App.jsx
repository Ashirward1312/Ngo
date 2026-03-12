// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";

import Hero from "./Pages/Hero/Hero";
import About from "./Pages/About/About";
import Project from "./Pages/Project/Project";
import Gallery from "./Pages/Gallery/Gallery";
import Contact from "./Pages/Contact/Contact";

import Mission from "./Pages/Mission/Mission";
import Testimonials from "./Pages/Testimonials/Testimonials";
import Faq from "./Pages/Faq/Faq";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Mission />
              <Testimonials />
              <Faq />
            </>
          }
        />

        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Projects Page */}
        <Route path="/projects" element={<Project />} />

        {/* Gallery Page */}
        <Route path="/gallery" element={<Gallery />} />

        {/* Contact Page */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;