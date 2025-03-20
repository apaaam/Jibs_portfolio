import React from 'react';
import photo from '../assets/images/Photo.jpeg'; // Import the image

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to My Portfolio</h1>
        <p className="hero-subtitle">
          I'm a passionate web developer who loves building amazing projects.
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
        <img src={photo} alt="My Work" /> {/* Use the imported image */}
      </div>
    </section>
  );
};

export default Hero;