import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>Hello, I’m Mohamed</h1>
        <p>Front-End Developer</p>
      </div>
      <div className="hero-image">
<img src="/Portfolio/1000074103.jpg" alt="Profile" />
      </div>
    </section>
  );
};

export default Hero;