import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const Experience = ({ items = [] }) => {
  const sample = [
    { role: 'Teaching Assistant', org: 'Your University', date: '2023 - Present', bullets: ['Assisted lab sessions', 'Graded assignments', 'Held office hours'] },
    { role: 'Full-stack Intern', org: 'Startup Name', date: '2022 - 2023', bullets: ['Built features in React + Node', 'Wrote tests', 'Deployed to cloud'] },
  ];

  const list = items.length ? items : sample;

  return (
    <section id="experience" className="section">
      <div className="section-inner">
        <h2>Experience</h2>
        <p className="muted">Relevant roles & internships</p>

        <div className="exp-list">
          {list.map((e, idx) => (
            <motion.div key={idx} className="exp-card" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.08 }}>
              <div className="exp-head">
                <h3>{e.role}</h3>
                <span className="muted">{e.org} • {e.date}</span>
              </div>
              <ul>
                {e.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
