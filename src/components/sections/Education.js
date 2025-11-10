import React from 'react';
import './sections.css';

const Education = ({ items = [] }) => {
  const sample = [
    { degree: 'MCA', school: 'Your University', year: '2024 - Present' },
    { degree: 'B.Sc Computer Science', school: 'Your College', year: '2019 - 2022' },
  ];
  const list = items.length ? items : sample;

  return (
    <section id="education" className="section">
      <div className="section-inner">
        <h2>Education</h2>
        <p className="muted">Formal education</p>

        <div className="edu-list">
          {list.map((e, i) => (
            <div key={i} className="edu-card">
              <h3>{e.degree}</h3>
              <span className="muted">{e.school} • {e.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
