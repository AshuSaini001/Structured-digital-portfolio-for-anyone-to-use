import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import './sections.css';

const ContactSection = () => {
  return (
    <section id="contact" className="section">
      <div className="section-inner center">
        <h2>Contact</h2>
        <p className="muted">Let's build something together — reach out!</p>

        <div className="contact-actions">
          <a className="btn primary" href="mailto:your.email@example.com"><FaEnvelope style={{verticalAlign:'middle', marginRight:8}}/> Email Me</a>
          <div className="social-inline">
            <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"><FaGithub /></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"><FaLinkedin /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
