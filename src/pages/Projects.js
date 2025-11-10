import React from 'react';
import './Projects.css';

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <ul>
        <li>
          <h3>Project 1</h3>
          <p>Description of project 1</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
        <li>
          <h3>Project 2</h3>
          <p>Description of project 2</p>
          <a href="https://github.com/yourproject" target="_blank" rel="noopener noreferrer">View on GitHub</a>
        </li>
      </ul>
    </div>
  );
};

export default Projects;