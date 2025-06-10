import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <style>{`
        .nav-container {
          position: relative;
        }

        .nav-links {
          display: flex;
          gap: 1.5rem;
        }

        .menu-toggle {
          display: none;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .menu-toggle {
            display: block;
            background: none;
            border: none;
            font-size: 1.8rem;
            cursor: pointer;
            color: #213547;
          }

          .dropdown {
            position: absolute;
            top: 100%;
            right: 2rem;
            background: #ffffff;
            flex-direction: column;
            padding: 1rem;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
            z-index: 1000;
          }

          .dropdown a {
            margin-bottom: 0.5rem;
          }
        }
      `}</style>

      <nav style={styles.navbar} className="nav-container">
        {/* Logo */}
        <Link to="/" style={styles.logo}>
          Scaleport
        </Link>

        {/* Hamburger Toggle */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(prev => !prev)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop Links */}
        <div className="nav-links">
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/about" style={styles.link}>About Us</Link>
          <Link to="/employee" style={styles.link}>Find a Job</Link>
          <Link to="/employer" style={styles.link}>Hire Talent</Link>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="dropdown" style={{ display: 'flex' }}>
            <Link to="/" style={styles.link} onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/about" style={styles.link} onClick={() => setMenuOpen(false)}>About Us</Link>
            <Link to="/employee" style={styles.link} onClick={() => setMenuOpen(false)}>Find a Job</Link>
            <Link to="/employer" style={styles.link} onClick={() => setMenuOpen(false)}>Hire Talent</Link>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;

const styles = {
  navbar: {
    backgroundColor: '#ffffff',
    borderBottom: '1px solid #ddd',
    padding: '1rem 2rem',
    fontFamily: 'sans-serif',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
  },
  logo: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#213547',
    textDecoration: 'none',
  },
  link: {
    backgroundColor: '#213547',
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    padding: '0.4rem 0.75rem',
    borderRadius: '4px',
    transition: 'background 0.2s ease',
  },
};
