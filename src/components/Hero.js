import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <header id="hero" className="hero">
      <div className="hero-inner">
        <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>Hi, I'm <span className="accent">Your Name</span></motion.h1>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.12 }}>MCA student & full-stack developer — I build accessible, performant web apps.</motion.p>

        <div className="hero-ctas">
          <a className="btn primary" href="#contact">Get in touch</a>
          <a className="btn" href="#projects">See projects</a>
        </div>

        <div className="hero-social">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        </div>
      </div>
    </header>
  );
};

export default Hero;