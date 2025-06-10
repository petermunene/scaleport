import React from 'react';
import { FaUserClock, FaLaptopCode, FaPenFancy, FaGlobe, FaHandshake, FaUserCheck, FaBullseye, FaInstagram } from 'react-icons/fa';

function About() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h1 style={styles.heading}>
          <FaBullseye style={styles.iconHeading} /> Skills Are Currency — But Only If Someone Pays You For Them
        </h1>

        <p style={styles.paragraph}>Right now somewhere in the world:</p>
        <ul style={styles.list}>
          <li><FaPenFancy style={styles.icon} /> A brilliant graphic designer stares at another unpaid invoice</li>
          <li><FaUserClock style={styles.icon} /> A startup founder wastes hours interviewing the wrong candidates</li>
          <li><FaLaptopCode style={styles.icon} /> A talented writer questions if their craft will ever pay the bills</li>
        </ul>

        <p style={styles.paragraph}>
          The system is broken. Not because work doesn't exist but because <em>connections fail where talent thrives.</em>
        </p>

        <h2 style={styles.subheading}>
          <FaGlobe style={styles.iconHeading} /> This Is ScalePort
        </h2>

        <p style={styles.paragraph}>
          We're tearing down the walls between skill and opportunity. Not just in one market, but globally — because talent knows no borders, and neither should your earning potential.
        </p>

        <h3 style={styles.sectionHeading}>
          <FaUserCheck style={styles.iconHeading} /> For Those Who Do The Work:
        </h3>
        <ul style={styles.list}>
          <li><FaBullseye style={styles.icon} /> Stop begging for scraps on overcrowded platforms</li>
          <li><FaUserClock style={styles.icon} /> Escape the exposure trap that never pays rent</li>
          <li><FaHandshake style={styles.icon} /> Finally connect with clients who respect your craft</li>
        </ul>

        <h3 style={styles.sectionHeading}>
          <FaHandshake style={styles.iconHeading} /> For Those Who Need The Work Done:
        </h3>
        <ul style={styles.list}>
          <li><FaBullseye style={styles.icon} /> Cut through the noise of unvetted experts</li>
          <li><FaLaptopCode style={styles.icon} /> Access specialized skills on demand</li>
          <li><FaUserCheck style={styles.icon} /> Build long-term relationships with proven talent</li>
        </ul>

        <p style={styles.emphasis}>How We're Different</p>
      </div>

      <footer style={footer}>
        <p>&copy; {new Date().getFullYear()} Scaleport</p>
        <p>Reach out to us through +254 104 413411</p>
        <a href="mailto:contact@scaleport.com" style={email}>contact@scaleport.com</a>
        <a
          href="https://www.instagram.com/scaleport.global"
          target="_blank"
          rel="noopener noreferrer"
          style={insta}
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>
      </footer>
    </div>
  );
}

export default About;

const blue = '#213547';
const purple = '#f3f0ff';

const footer = {
  marginTop: 'auto',
  padding: '1.5rem',
  background: blue,
  color: '#fff',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  gap: '.5rem',
};

const insta = { color: purple, fontSize: '1.4rem' };
const email = { color: purple, textDecoration: 'underline' };

const styles = {
  container: {
    background: 'linear-gradient(to bottom , #f3f0ff,white)',
    maxWidth: '900px',
    margin: '0 auto',
    padding: '2rem',
    fontFamily: 'Arial, sans-serif',
    lineHeight: '1.7',
  },
  content: {
    color: blue,
  },
  heading: {
    fontSize: '2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  subheading: {
    fontSize: '1.5rem',
    marginTop: '2rem',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  sectionHeading: {
    fontSize: '1.2rem',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  paragraph: {
    marginBottom: '1rem',
  },
  list: {
    marginLeft: '1.5rem',
    marginBottom: '1rem',
    listStyle: 'none',
    paddingLeft: 0,
  },
  emphasis: {
    fontStyle: 'italic',
    fontWeight: 'bold',
    fontSize: '1.1rem',
    marginTop: '2rem',
  },
  icon: {
    marginRight: '0.5rem',
    color: blue,
  },
  iconHeading: {
    color: blue,
    fontSize: '1.2rem',
  },
};
