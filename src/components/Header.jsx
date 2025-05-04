import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1 className="header-title">My Portfolio</h1>
      <nav className="header-nav">
          <a
            href="https://jibsblog.webflow.io/" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Blog
          </a>
        <a href="#about" className="nav-link">About</a>
        <a href="#projects" className="nav-link">Projects</a>
        <a href="#skills" className="nav-link">Skills</a>
        <a href="#contact" className="nav-link">Contact</a>
        <div className="social-links">
          <a
            href="https://www.facebook.com/jibrenz.alpha" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            FB
          </a>
          <a
            href="https://www.instagram.com/jibren_delulu/" 
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            IG
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Header;