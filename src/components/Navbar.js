// Navbar.js
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Navbar.css';
import useScrollSpy from '../hooks/useScrollSpy';

const navItem = { hover: { y: -4 }, tap: { scale: 0.98 } };

const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'education', 'contact'];

const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Always call the hook to preserve hooks order; only use the result when on home route
  const spyActiveId = useScrollSpy(sections);
  const activeId = location.pathname === '/' ? spyActiveId : '';

  const handleClick = (e, id) => {
    e.preventDefault();
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar">
      <div className="container nav-inner">
        <div className="brand"><Link to="/">YourName</Link></div>

        <button className="nav-toggle" aria-label="Toggle menu" onClick={() => setOpen((s) => !s)}>☰</button>

        <ul className={open ? 'open' : ''}>
          {sections.map((s) => (
            <motion.li key={s} variants={navItem} whileHover="hover" whileTap="tap">
              <a href={`#${s}`} onClick={(e) => handleClick(e, s)} className={activeId === s ? 'active' : ''}>{s === 'hero' ? 'Home' : s.charAt(0).toUpperCase() + s.slice(1)}</a>
            </motion.li>
          ))}
          <motion.li variants={navItem} whileHover="hover" whileTap="tap"><Link to="/projects">All Projects</Link></motion.li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;