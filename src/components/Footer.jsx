export default function Footer({ districtMeta }) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/assets/leni-48th-ward-logo.png" alt="Alderwoman Leni Manaa-Hoppenworth — 48th Ward" style={{ height: '48px', width: 'auto', objectFit: 'contain' }} />
              <div>
                <h4 style={{ fontSize: '1rem', margin: 0 }}>48th Ward Civic Data Platform</h4>
                <p style={{ fontSize: '0.75rem', color: 'var(--cp-gray-600)', margin: 0 }}>
                  Resident-Focused Neighborhood Intelligence
                </p>
              </div>
            </div>
            <p style={{ fontSize: '0.8125rem', color: 'var(--cp-gray-600)', marginTop: '0.75rem', maxWidth: 320 }}>
              A non-partisan civic engagement platform providing accurate, timely, and relevant information for every community.
            </p>
          </div>

          <div className="footer-col">
            <h5>Organize</h5>
            <a href="#events">Local Events</a>
            <a href="#community">Community Groups</a>
            <a href="https://the48thward.org/blog/front-desk-volunteer" target="_blank" rel="noopener noreferrer">Volunteer</a>
          </div>

          <div className="footer-col">
            <h5>Learn</h5>
            <a href="#officials">Your Officials</a>
            <a href="#agencies">Agencies</a>
            <a href="#legislation">Legislation</a>
            <a href="#benefits">Benefits & Resources</a>
          </div>

          <div className="footer-col">
            <h5>Act</h5>
            <a href="https://ova.elections.il.gov/" target="_blank" rel="noopener noreferrer">Register to Vote</a>
            <a href="https://chicagoelections.gov/" target="_blank" rel="noopener noreferrer">Find Your Polling Place</a>
            <a href="https://311.chicago.gov/" target="_blank" rel="noopener noreferrer">Submit a 311 Request</a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} 48th Ward Civic Data Platform — Verified Community Resource.</p>
        </div>
      </div>

      <style>{`
        .site-footer {
          margin-top: auto;
          padding: 3rem 0 1.5rem;
          border-top: 1px solid var(--cp-card-border);
          background: var(--cp-glass);
        }
        .footer-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 2rem;
          margin-bottom: 2rem;
        }
        .footer-logo { display: flex; align-items: center; gap: 10px; }
        .footer-col { display: flex; flex-direction: column; gap: 0.5rem; }
        .footer-col h5 {
          font-family: var(--font-display);
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--cp-gray-700);
          margin-bottom: 0.25rem;
        }
        .footer-col a {
          font-size: 0.8125rem;
          color: var(--cp-gray-600);
          transition: color 150ms;
        }
        .footer-col a:hover { color: var(--cp-gray-900); }
        .footer-bottom {
          padding-top: 1.5rem;
          border-top: 1px solid var(--cp-card-border);
          text-align: center;
        }
        .footer-bottom p { font-size: 0.75rem; color: var(--cp-gray-600); }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </footer>
  );
}
