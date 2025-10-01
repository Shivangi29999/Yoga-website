import React from "react";
import "../App.css";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="overlay">
        <h1>Find Your Inner Peace</h1>
        <p>
          Yoga classes that bring balance, build strength, and cultivate
          mindfulness.
        </p>
        <p> A transformative, welcoming path to well-being.</p>

        <button>Join Us</button>
      </div>
    </section>
  );
}

export default Hero;
