import React from 'react';
import { motion } from 'framer-motion';
import './ProfileCard.css';

const cardVariant = {
  hidden: { opacity: 0, y: 10 },
  enter: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const skillItem = {
  hidden: { opacity: 0, y: 6 },
  enter: i => ({ opacity: 1, y: 0, transition: { delay: i * 0.06 } }),
};

const ProfileCard = ({
  name = 'Your Name',
  role = 'MCA Student',
  bio = '',
  skills = [],
  education = [],
}) => {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <motion.div
      className="profile-card"
      variants={cardVariant}
      initial="hidden"
      animate="enter"
      whileHover={{ scale: 1.01, boxShadow: '0 10px 30px rgba(12,30,80,0.12)' }}
    >
      <div className="pc-left">
        <div className="avatar">{initials}</div>
        <div className="basic">
          <h3>{name}</h3>
          <p className="role">{role}</p>
        </div>
      </div>

      <div className="pc-right">
        <p className="bio">{bio}</p>

        {skills && skills.length > 0 && (
          <div className="skills">
            {skills.map((s, i) => (
              <motion.span
                key={s}
                className="skill"
                custom={i}
                variants={skillItem}
                initial="hidden"
                animate="enter"
                whileHover={{ y: -4, scale: 1.03 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
        )}

        {education && education.length > 0 && (
          <div className="education">
            <h4>Education</h4>
            <ul>
              {education.map((ed, i) => (
                <motion.li key={i} initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { delay: 0.08 * i } }}>{ed}</motion.li>
              ))}
            </ul>
          </div>
        )}

        <div className="actions">
          <a className="btn primary" href="/contact">Contact</a>
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download CV</a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfileCard;
