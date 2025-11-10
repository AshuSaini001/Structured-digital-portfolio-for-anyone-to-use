import React from 'react';
import { FaCode, FaDatabase, FaCloud } from 'react-icons/fa';
import { motion } from 'framer-motion';
import './sections.css';

const Skill = ({ icon: Icon, name }) => (
  <motion.div className="skill-card" whileHover={{ y: -6 }}>
    <div className="skill-icon"><Icon size={22} /></div>
    <div className="skill-name">{name}</div>
  </motion.div>
);

const Skills = ({ items = [] }) => {
  const defaultSkills = ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL'];
  const skills = items.length ? items : defaultSkills;

  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <h2>Skills</h2>
        <p className="muted">Technologies, languages and tools I use regularly</p>

        <div className="skills-grid">
          {skills.map((s, i) => (
            <Skill key={s} name={s} icon={i % 3 === 0 ? FaCode : i % 3 === 1 ? FaDatabase : FaCloud} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
