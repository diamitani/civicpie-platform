import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar({ districtName, stateName }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 72);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <>
      <nav
        style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000,
          width: scrolled ? 'min(92vw, 900px)' : 'min(96vw, 1100px)',
          transition: 'width 0.5s cubic-bezier(0.16,1,0.3,1), background 0.4s ease, box-shadow 0.4s ease',
          background: scrolled ? 'rgba(242,240,233,0.88)' : 'rgba(15,23,41,0.35)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderRadius: '9999px',
          border: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid rgba(255,255,255,0.12)',
          boxShadow: scrolled ? '0 8px 40px rgba(0,0,0,0.1)' : 'none',
          padding: '0 1.5rem',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '58px' }}>
          <Link
            to="/"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textDecoration: 'none',
              flexShrink: 0,
            }}
          >
            {/* Leni logo — white pill container works on any navbar bg */}
            <div style={{
              background: 'white',
              borderRadius: '8px',
              padding: '4px 8px',
              display: 'inline-flex',
              alignItems: 'center',
              flexShrink: 0,
              boxShadow: scrolled ? 'none' : '0 2px 12px rgba(0,0,0,0.25)',
              transition: 'box-shadow 0.4s',
            }}>
              <img
                src="/assets/leni-48th-ward-logo.png"
                alt="Alderwoman Leni Manaa-Hoppenworth — 48th Ward"
                style={{ height: '26px', width: 'auto', display: 'block' }}
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: scrolled ? 'var(--cp-dark)' : 'white',
                transition: 'color 0.4s',
              }}>
                CivicPie
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5625rem',
                color: scrolled ? 'var(--cp-gray-500)' : 'rgba(255,255,255,0.55)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                transition: 'color 0.4s',
              }}>
                {districtName} · Chicago
              </div>
            </div>
          </Link>

          <div className="nav-links-desktop" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '2px',
          }}>
            {['Officials', 'Events', 'Directory', 'Agencies'].map(label => (
              <a
                key={label}
                href={label === 'Directory' ? '/directory' : `#${label.toLowerCase()}`}
                onClick={label === 'Directory' ? undefined : undefined}
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  fontSize: '0.8125rem',
                  color: scrolled ? 'var(--cp-gray-600)' : 'rgba(255,255,255,0.75)',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  e.target.style.color = scrolled ? 'var(--cp-dark)' : 'white';
                  e.target.style.background = scrolled ? 'var(--cp-bg)' : 'rgba(255,255,255,0.1)';
                }}
                onMouseLeave={e => {
                  e.target.style.color = scrolled ? 'var(--cp-gray-600)' : 'rgba(255,255,255,0.75)';
                  e.target.style.background = 'transparent';
                }}
              >
                {label}
              </a>
            ))}
            <a
              href="https://ova.elections.il.gov/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.8125rem',
                background: 'var(--cp-primary)',
                color: 'white',
                padding: '0.45rem 1.125rem',
                borderRadius: '9999px',
                textDecoration: 'none',
                marginLeft: '0.5rem',
                transition: 'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
                boxShadow: '0 2px 10px rgba(0,153,216,0.35)',
              }}
              onMouseEnter={e => {
                e.target.style.transform = 'scale(1.04)';
                e.target.style.boxShadow = '0 4px 18px rgba(0,153,216,0.5)';
              }}
              onMouseLeave={e => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 2px 10px rgba(0,153,216,0.35)';
              }}
            >
              Register to Vote
            </a>
          </div>

          <button
            className="nav-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            style={{
              display: 'none',
              background: 'none',
              border: 'none',
              color: scrolled ? 'var(--cp-dark)' : 'white',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            borderTop: '1px solid rgba(0,0,0,0.07)',
            padding: '0.75rem 0 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '2px',
          }}>
            {['#officials', '#events', '/directory', '#agencies'].map((href, i) => {
              const labels = ['Officials', 'Events', 'Directory', 'Agencies'];
              return (
                <a
                  key={labels[i]}
                  href={href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 500,
                    fontSize: '0.9375rem',
                    color: 'var(--cp-dark)',
                    padding: '0.625rem 0.75rem',
                    borderRadius: '0.75rem',
                    textDecoration: 'none',
                    transition: 'background 0.15s',
                  }}
                >
                  {labels[i]}
                </a>
              );
            })}
            <a
              href="https://ova.elections.il.gov/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 600,
                fontSize: '0.9375rem',
                background: 'var(--cp-primary)',
                color: 'white',
                padding: '0.75rem',
                borderRadius: '0.875rem',
                textDecoration: 'none',
                textAlign: 'center',
                marginTop: '0.5rem',
              }}
            >
              Register to Vote
            </a>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 820px) {
          .nav-links-desktop { display: none !important; }
          .nav-toggle { display: block !important; }
        }
      `}</style>
    </>
  );
}
