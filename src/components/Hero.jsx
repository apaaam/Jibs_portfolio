import React from 'react';
import photo from '../assets/images/Gradpic.jpg'; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I'm a passionate Photographer that loves to capture moments.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="cta-button">
            View My Work
          </a>
          <a href="#contact" className="cta-button secondary">
            Contact Me
          </a>
        </div>
      </div>
      <div className="hero-image">
        <img src={photo} alt="My Work" /> 
      </div>
    </section>
  );
};

export default Hero;