import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

export default function HeroSection({ district, stats }) {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const ctx = gsap.context(() => {
      const items = contentRef.current.querySelectorAll('.hero-anim');
      gsap.from(items, {
        y: 48,
        opacity: 0,
        stagger: 0.1,
        duration: 1.1,
        ease: 'power3.out',
        delay: 0.2,
      });

      if (statsRef.current) {
        const statCards = statsRef.current.querySelectorAll('.stat-anim');
        gsap.from(statCards, {
          y: 32,
          opacity: 0,
          stagger: 0.08,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.9,
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      style={{
        position: 'relative',
        height: '100dvh',
        minHeight: '640px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
      }}
    >
      {/* Full-bleed Chicago hero image */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'url(https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 30%',
        zIndex: 0,
      }} />

      {/* Primary gradient overlay — heavier dim for legibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(15,23,41,0.99) 0%, rgba(15,23,41,0.88) 45%, rgba(15,23,41,0.62) 100%)',
        zIndex: 1,
      }} />

      {/* Accent blue glow at bottom-left */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        left: '-5%',
        width: '45%',
        height: '60%',
        background: 'radial-gradient(ellipse at bottom left, rgba(0,153,216,0.12) 0%, transparent 70%)',
        zIndex: 1,
      }} />

      {/* Chicago star — top-right decorative */}
      <div style={{
        position: 'absolute',
        top: '7rem',
        right: '2.5rem',
        zIndex: 2,
        opacity: 0.18,
        pointerEvents: 'none',
      }}>
        <svg width="72" height="72" viewBox="0 0 100 100" fill="none">
          <polygon points="50,4 61,35 94,35 68,56 78,88 50,68 22,88 32,56 6,35 39,35" fill="#ED1D27" />
        </svg>
      </div>

      {/* Content — bottom left */}
      <div
        ref={contentRef}
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 1.5rem 5rem',
        }}
      >
        {/* Leni brand attribution */}
        <div
          className="hero-anim"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.625rem',
            marginBottom: '1.75rem',
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '9999px',
            padding: '0.375rem 0.875rem 0.375rem 0.5rem',
            backdropFilter: 'blur(8px)',
          }}
        >
          {/* Chicago 6-pointed star */}
          <svg width="18" height="18" viewBox="0 0 100 100" fill="none" style={{ flexShrink: 0 }}>
            <polygon
              points="50,4 61,35 94,35 68,56 78,88 50,68 22,88 32,56 6,35 39,35"
              fill="#ED1D27"
            />
          </svg>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            letterSpacing: '0.12em',
            color: 'rgba(255,255,255,0.65)',
            textTransform: 'uppercase',
          }}>
            {district.alderman ? `${district.alderman} · ` : ''}{district.name}
          </span>
        </div>

        {/* Overline */}
        <div
          className="hero-anim"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            letterSpacing: '0.14em',
            color: 'rgba(0,153,216,0.85)',
            textTransform: 'uppercase',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'rgba(0,153,216,0.6)' }} />
          {district.neighborhoods ? district.neighborhoods.slice(0, 2).join(' & ') : district.tagline} · {district.city}, {district.stateAbbr}
        </div>

        {/* Main headline */}
        <h1
          className="hero-anim"
          style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(2.75rem, 7.5vw, 6.5rem)',
            lineHeight: 1.0,
            color: 'white',
            marginBottom: '0.15rem',
            letterSpacing: '-0.025em',
          }}
        >
          Your {district.name},
        </h1>
        <h1
          className="hero-anim"
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(3.25rem, 9vw, 8rem)',
            lineHeight: 1.0,
            color: 'var(--cp-primary)',
            marginBottom: '2rem',
            letterSpacing: '-0.01em',
          }}
        >
          all in one place.
        </h1>

        {/* Description */}
        <p
          className="hero-anim"
          style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
            color: 'rgba(255,255,255,0.65)',
            maxWidth: '540px',
            lineHeight: 1.7,
            marginBottom: '2rem',
          }}
        >
          Your elected officials, upcoming votes, community events, and services — all in one place for {district.population || 'every resident'} of {district.name}. Stay informed. Get involved. Make your voice heard.
        </p>

        {/* CTAs */}
        <div className="hero-anim" style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <Link
            to="/directory"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              background: 'var(--cp-primary)',
              color: 'white',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: '0 4px 20px rgba(0,153,216,0.4)',
              transition: 'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.04)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,153,216,0.55)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,153,216,0.4)';
            }}
          >
            Browse the Directory
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <a
            href="#officials"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              background: 'rgba(255,255,255,0.1)',
              color: 'white',
              padding: '0.875rem 1.75rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(8px)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.18)';
              e.currentTarget.style.transform = 'scale(1.03)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Meet Your Officials
          </a>
        </div>

        {/* Stats bar */}
        <div
          ref={statsRef}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '1.25rem',
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,0.1)',
            maxWidth: '600px',
          }}
        >
          {stats.slice(0, 6).map((s, i) => (
            <div
              key={i}
              className="stat-anim"
              style={{
                padding: '1.125rem 1.25rem',
                background: 'rgba(15,23,41,0.6)',
                backdropFilter: 'blur(12px)',
                borderRight: (i % 3) < 2 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '1.375rem',
                color: 'white',
                lineHeight: 1.1,
                marginBottom: '0.2rem',
              }}>
                {s.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.5625rem',
                color: 'rgba(255,255,255,0.4)',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
              }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute',
        bottom: '1.5rem',
        right: '1.5rem',
        zIndex: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '6px',
      }}>
        <div style={{
          width: '1px',
          height: '48px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.4))',
          animation: 'scroll-line 2s ease-in-out infinite',
        }} />
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.5625rem',
          color: 'rgba(255,255,255,0.3)',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          writingMode: 'vertical-rl',
        }}>
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scroll-line {
          0%, 100% { opacity: 0.3; transform: scaleY(0.7); }
          50% { opacity: 1; transform: scaleY(1); }
        }
        @media (max-width: 768px) {
          .hero-stats-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
