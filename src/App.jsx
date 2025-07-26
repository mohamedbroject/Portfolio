import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <div className="content-sections">
        <About />
        <Skills />
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
