import React from 'react';
import Hero from '../components/Hero';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import ProjectsSummary from '../components/sections/ProjectsSummary';
import Education from '../components/sections/Education';
import ContactSection from '../components/sections/ContactSection';
import './Home.css';

const Home = () => {
  return (
    <main className="home-page">
      <Hero />
      <section id="about" className="section">
        <div className="section-inner">
          <h2>About Me</h2>
          <p className="muted">I'm an MCA student focused on full-stack development, algorithms, and cloud-native apps. I enjoy building clean, maintainable code and learning new tools.</p>
        </div>
      </section>

      <Skills />
      <Experience />
      <ProjectsSummary />
      <Education />
      <ContactSection />
    </main>
  );
};

export default Home;