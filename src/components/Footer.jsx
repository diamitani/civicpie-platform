import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ districtMeta }) {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    }, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer style={{
      background: 'var(--cp-dark)',
      borderRadius: '3rem 3rem 0 0',
      marginTop: 'auto',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle top accent line */}
      <div style={{ height: '1px', background: 'linear-gradient(90deg, transparent, rgba(0,153,216,0.4), transparent)' }} />

      {/* Blue glow */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '30%',
        background: 'radial-gradient(ellipse at top, rgba(0,153,216,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '4rem 1.5rem 2.5rem', position: 'relative' }}>
        {/* Main grid */}
        <div className="footer-main-grid" style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3.5rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1rem' }}>
              <div style={{
                background: 'white',
                borderRadius: '10px',
                padding: '6px 10px',
                display: 'inline-flex',
                alignItems: 'center',
                flexShrink: 0,
              }}>
                <img
                  src="/assets/leni-48th-ward-logo.png"
                  alt="Alderwoman Leni Manaa-Hoppenworth — 48th Ward"
                  style={{ height: '32px', width: 'auto', display: 'block' }}
                />
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 700, fontSize: '0.9375rem', color: 'white', lineHeight: 1.2 }}>
                  CivicPie
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(255,255,255,0.35)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: '2px' }}>
                  {districtMeta?.neighborhoods?.slice(0,2).join(' & ') || 'Community'} · {districtMeta?.city || 'Chicago'}
                </div>
              </div>
            </div>

            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8125rem',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              maxWidth: '300px',
              marginBottom: '1.5rem',
            }}>
              CivicPie gives every resident the information and tools they need to understand their local government, engage their community, and make their voice heard.
            </p>

            {/* System status */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(34,197,94,0.08)',
              border: '1px solid rgba(34,197,94,0.15)',
              borderRadius: '9999px',
              padding: '0.375rem 0.875rem',
            }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 8px rgba(34,197,94,0.6)',
                display: 'inline-block',
                animation: 'pulse-dot 2.5s ease-in-out infinite',
              }} />
              <span style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5625rem',
                color: 'rgba(34,197,94,0.85)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}>
                System Operational — {time} CST
              </span>
            </div>
          </div>

          {/* Organize */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Organize
            </div>
            {[
              { label: 'Local Events', href: '#events' },
              { label: 'Community Groups', href: '#community' },
              { label: 'Volunteer', href: 'https://the48thward.org/blog/front-desk-volunteer' },
              { label: 'Ward Calendar', href: districtMeta?.serviceLinks?.calendar || '#' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Learn */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Learn
            </div>
            {[
              { label: 'Your Officials', href: '#officials' },
              { label: 'Agencies', href: '#agencies' },
              { label: 'Legislation', href: '#legislation' },
              { label: 'Community', href: '#community' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Act */}
          <div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'rgba(255,255,255,0.25)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
              Act
            </div>
            {[
              { label: 'Register to Vote', href: 'https://ova.elections.il.gov/' },
              { label: 'Find Polling Place', href: 'https://chicagoelections.gov/' },
              { label: 'Submit a 311 Request', href: 'https://311.chicago.gov/' },
              { label: 'Service Request', href: districtMeta?.serviceLinks?.serviceRequest || '#' },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'block',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.8125rem',
                  color: 'rgba(255,255,255,0.45)',
                  textDecoration: 'none',
                  marginBottom: '0.5rem',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = 'white'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.45)'}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.07)',
          paddingTop: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '0.75rem',
        }}>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            color: 'rgba(255,255,255,0.25)',
            letterSpacing: '0.06em',
          }}>
            © {new Date().getFullYear()} CivicPie · Non-partisan · Resident-verified
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {[
              { label: 'Ward Website', href: 'https://the48thward.org' },
              { label: 'Newsletter', href: districtMeta?.serviceLinks?.newsletter || '#' },
              { label: 'Contact', href: `mailto:${districtMeta?.wardOffice?.email || 'info@the48thward.org'}` },
            ].map(item => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                  letterSpacing: '0.04em',
                  transition: 'color 0.15s',
                }}
                onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.25)'}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-main-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 540px) {
          .footer-main-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
