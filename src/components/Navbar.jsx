import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ districtName, stateName }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand">
          <img src="/assets/48th-ward-logo-true.png" alt="48th Ward" className="brand-logo" />
          <span className="brand-text">
            <span className="brand-name">48th Ward Civic Data</span>
            <span className="brand-district">{districtName} · {stateName}</span>
          </span>
        </Link>

        <div className={`navbar-links ${open ? 'open' : ''}`}>
          <a href="#officials" onClick={() => setOpen(false)}>Officials</a>
          <a href="#events" onClick={() => setOpen(false)}>Events</a>
          <a href="#agencies" onClick={() => setOpen(false)}>Agencies</a>
          <a href="#legislation" onClick={() => setOpen(false)}>Legislation</a>
          <a href="#benefits" onClick={() => setOpen(false)}>Benefits</a>
          <a href="#community" onClick={() => setOpen(false)}>Community</a>
          <a
            href="https://ova.elections.il.gov/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
            onClick={() => setOpen(false)}
          >
            Register to Vote
          </a>
        </div>

        <button className="navbar-toggle" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <style>{`
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--cp-glass);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--cp-card-border);
        }
        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 64px;
        }
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          color: inherit;
        }
        .brand-logo { height: 36px; width: auto; object-fit: contain; }
        .brand-text { display: flex; flex-direction: column; line-height: 1.2; }
        .brand-name {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 1.125rem;
          color: var(--cp-gray-900);
        }
        .brand-district {
          font-size: 0.6875rem;
          color: var(--cp-gray-600);
          font-weight: 500;
        }
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .navbar-links a {
          padding: 0.4rem 0.75rem;
          font-size: 0.8125rem;
          font-weight: 500;
          color: var(--cp-gray-600);
          border-radius: var(--radius-full);
          transition: all 150ms;
          text-decoration: none;
        }
        .navbar-links a:hover {
          color: var(--cp-gray-900);
          background: var(--cp-gray-50);
        }
        .btn-sm { padding: 0.4rem 1rem !important; font-size: 0.8125rem !important; }
        .navbar-toggle {
          display: none;
          background: none;
          border: none;
          color: var(--cp-gray-700);
          cursor: pointer;
          padding: 4px;
        }
        @media (max-width: 900px) {
          .navbar-toggle { display: block; }
          .navbar-links {
            display: none;
            position: absolute;
            top: 64px;
            left: 0;
            right: 0;
            flex-direction: column;
            background: rgba(255,255,255,0.97);
            padding: 1rem;
            border-bottom: 1px solid var(--cp-card-border);
            gap: 4px;
          }
          .navbar-links.open { display: flex; }
          .navbar-links a { width: 100%; padding: 0.75rem 1rem; }
        }
      `}</style>
    </nav>
  );
}
