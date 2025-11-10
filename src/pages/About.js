import React from 'react';
import './About.css';
import ProfileCard from '../components/ProfileCard';

const About = () => {
  const skills = ['Java', 'Python', 'JavaScript', 'React', 'Node.js', 'SQL', 'Data Structures'];
  const education = [
    'Master of Computer Applications (MCA) — Current',
    'B.Sc. in Computer Science — Your University',
  ];

  const bio = `I am an MCA student focused on building full-stack solutions and strong fundamentals in algorithms, databases and distributed systems. I enjoy developing responsive web apps, solving algorithmic problems, and applying principles learned in coursework to real-world projects.`;

  return (
    <div className="about page-container">
      <h2 className="page-title">About Me</h2>

      <ProfileCard
        name="Your Name"
        role="MCA Student"
        bio={bio}
        skills={skills}
        education={education}
      />

      <section className="more">
        <div className="card">
          <h3>Projects & Experience</h3>
          <p>
            Worked on academic and personal projects including a full-stack student portal, a task-manager built with React and Node, and a data-analysis mini-project using Python and SQL.
          </p>
          <ul>
            <li>Student Portal — React, Node.js, MongoDB (authentication, CRUD, role-based access)</li>
            <li>Data Analysis — Python (pandas), SQL (project reports)</li>
            <li>Algorithms practice — competitive programming & DS/Algo</li>
          </ul>
        </div>

        <div className="card">
          <h3>Goals</h3>
          <p>
            Looking for internships and opportunities to work on scalable web applications, cloud-based solutions, and data-driven systems. Passionate about learning new technologies and contributing to open-source.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;