// pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaBriefcase, FaUsers, FaRocket } from 'react-icons/fa';

/* Embedded hero image */
const heroImage =
  'https://scontent-mba2-1.xx.fbcdn.net/v/t1.15752-9/495076856_1343063906787731_3821406928519554751_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0024fc&_nc_ohc=Q89zi7x34XIQ7kNvwFjScrF&_nc_oc=AdlLO4i_UFkHktL47ajDXc25zeNuJYmilv8_ZbHTXRRbWXxmSss4LShq9O7Pn5_WZpM&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent-mba2-1.xx&oh=03_Q7cD2gGD8zAcWA4SVRisYWtuuUobGkUmi-DYCl9Dgt1wWwe-Xw&oe=686F655F'
function Home() {
  return (
    <>
    <style>{`
            @keyframes fadeUp { 0%{opacity:0;transform:translateY(20px)}100%{opacity:1;transform:translateY(0)} }

            * {
                box-sizing: border-box;
            }

            html, body {
                margin: 0;
                padding: 0;
                overflow-x: hidden;
                width: 100%;
            }

            @media (min-width: 768px){
                .hero-grid {
                display: flex;
                align-items: center;
                gap: 2rem;
                text-align: left;
                }
                .hero-img {
                max-width: 30%;
                }
            }

            @media (max-width: 767px) {
                .btn-group {
                flex-direction: column;
                width: 100%;
                }

                .btn {
                width: 100%;
                text-align: center;
                }

                .hero-img {
                margin-top: 2rem;
                }
            }

            .btn:hover {
                transform: translateY(-2px);
                box-shadow: 0 4px 12px rgba(0,0,0,.12);
            }
            `}</style>

      {/* ─── Wrapper ─── */}
      <div style={wrapper}>

        {/* ─── Navbar ─── */}


        {/* ─── Hero ─── */}
        <header style={hero} className="hero-grid">
          <div style={{ flex: 1, animation: 'fadeUp .9s ease-out' }}>
            <h1 style={heroTitle}>Connect. Grow. Succeed.</h1>
            <p style={heroSubtitle}>
              The modern platform where ambitious talent<br />meets businesses ready to scale.
            </p>
            <div style={btnGroup}>
              <Link to="/employee" style={btnPrimary} className="btn">Find Work</Link>
              <Link to="/employer" style={btnOutline} className="btn">Post a Job</Link>
            </div>
          </div>
          <img src={heroImage} alt="Collaboration" style={heroImg} className="hero-img" />
        </header>

        {/* ─── Features ─── */}
        <section style={features}>
          {cardData.map(({ icon: Icon, title, text }) => (
            <div key={title} style={card} className="fade-card">
              <Icon size={32} color="#1db954" />
              <h3 style={cardTitle}>{title}</h3>
              <p style={cardText}>{text}</p>
            </div>
          ))}
        </section>

        {/* ─── Footer ─── */}
        <footer style={footer}>
          <p>&copy; {new Date().getFullYear()} Scaleport</p>
          <p> Reach out to us through +254 104 413411</p>
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
    </>
  );
}

/* ─── Data for feature cards ─── */
const cardData = [
  { icon: FaBriefcase, title: 'Opportunities', text: 'Curated roles for every career stage.' },
  { icon: FaUsers,      title: 'Top Talent',  text: 'Rigorous screening for quality hires.' },
  { icon: FaRocket,     title: 'Rapid Growth',text: 'Tools and insights to scale faster.' },
];

/* ─── Base Colors ─── */
const blue = '#213547';
const purple = '#f3f0ff';

/* ─── Styles ─── */
const wrapper = {
    fontFamily: 'sans-serif',
    color: blue,
    background: 'linear-gradient(to bottom ,white,#213547)',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',        // Add this
  };
  
  const hero = {
    padding: '3rem 1rem',       // Changed from 2rem to 1rem for smaller padding on phones
    maxWidth: '1200px',
    width: '100%',
    margin: '0 auto',
    boxSizing: 'border-box',
  };
  
  const btnGroup = {
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',          // Make buttons wrap if screen is narrow
  };
  
  const heroImg = {
    width: '100%',
    height: 'auto',
    borderRadius: 10,
    boxShadow: '0 8px 20px rgba(0,0,0,0.1)',
    animation: 'fadeUp 1.2s ease-out',
  };
const heroTitle = { fontSize: '2.5rem', marginBottom: '1rem', animation: 'fadeUp .8s ease-out' };

const heroSubtitle = { fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', animation: 'fadeUp 1s ease-out' };



const btnPrimary = { padding: '.75rem 1.5rem', background: blue, color: '#fff', borderRadius: 6, textDecoration: 'none', fontWeight: 600, transition: '.25s' };

const btnOutline = { ...btnPrimary, background: 'transparent', color: blue, border: `2px solid ${blue}` };


const features = { display: 'grid', gap: '1.5rem', gridTemplateColumns: 'repeat(auto-fit,minmax(240px,1fr))', padding: '3rem 2rem', background: `linear-gradient(135deg, ${purple} 0%, lightgrey 60%)` };

const card = { background: '#fff', borderRadius: 10, padding: '2rem 1.5rem', textAlign: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.06)', animation: 'fadeUp 1s ease-out' };

const cardTitle = { margin: '.75rem 0 .5rem', fontSize: '1.1rem' };

const cardText = { fontSize: '.95rem', lineHeight: 1.5 };

const footer = { marginTop: 'auto', padding: '1.5rem', background: blue, color: '#fff', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '.5rem' };

const email = { color: purple, textDecoration: 'underline' };

const insta = { color: purple, fontSize: '1.4rem' };

export default Home;
