import React from 'react';

function Employee() {
  return (
    <div style={styles.page}>
      <style>{`
        * {
          box-sizing: border-box;
        }
        html, body {
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }
        @media (max-width: 768px) {
          .form-container {
            border-radius: 0;
            box-shadow: none;
          }
        }
      `}</style>

      <h1 style={styles.heading}>Apply for Opportunities</h1>

      <div style={styles.iframeWrapper}>
        <div style={styles.formContainer} className="form-container">
          <iframe
            src="https://forms.gle/g1gMMWMeGWbsgNCA6"
            title="Employee Google Form"
            style={styles.iframe}
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}

export default Employee;

const styles = {
  page: {
    backgroundColor: '#f3f0ff',
    color: '#213547',
    minHeight: '100vh',
    padding: '2rem 1rem',
    fontFamily: 'sans-serif',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '2rem',
    fontSize: '2rem',
    color: '#103d25',
  },
  iframeWrapper: {
    display: 'flex',
    justifyContent: 'center',
  },
  formContainer: {
    maxWidth: '800px',
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    overflow: 'hidden',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
  },
  iframe: {
    border: 'none',
    width: '100%',
    height: '800px',
  },
};
