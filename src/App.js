import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Teachers from "./components/Teachers";
import Testimonials from "./components/Testimonials";
import Schedule from "./components/Schedule";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Teachers />
      <Testimonials />
      <Schedule />
      <Contact />
    </>
  );
}

export default App;
