import React from 'react';
import { motion } from 'framer-motion';
import './sections.css';

const ProjectCard = ({ p }) => (
  <motion.a className="proj-card" href={p.link || '#'} target="_blank" rel="noreferrer" whileHover={{ y: -6 }}>
    <div className="proj-header">
      <h4>{p.title}</h4>
      <span className="muted">{p.tech}</span>
    </div>
    <p className="proj-desc">{p.desc}</p>
  </motion.a>
);

const ProjectsSummary = ({ projects = [] }) => {
  const sample = [
    { title: 'Student Portal', tech: 'React · Node · MongoDB', desc: 'A portal for students with auth, roles and CRUD features.', link: '#' },
    { title: 'Task Manager', tech: 'React · Firebase', desc: 'A progressive task manager with offline-first support.', link: '#' },
  ];
  const list = projects.length ? projects : sample;

  return (
    <section id="projects" className="section">
      <div className="section-inner">
        <h2>Projects</h2>
        <p className="muted">A selection of projects I've built</p>

        <div className="projects-grid">
          {list.map((p, i) => <ProjectCard key={i} p={p} />)}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSummary;
