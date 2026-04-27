import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function SplitWords({ text, style = {} }) {
  return text.split(' ').map((word, i) => (
    <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
      <span className="manifesto-word" style={{ display: 'inline-block', ...style }}>
        {word}&nbsp;
      </span>
    </span>
  ));
}

export default function ManifestoSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const bgRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 18,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        });
      }

      if (textRef.current) {
        const words = textRef.current.querySelectorAll('.manifesto-word');
        gsap.from(words, {
          y: 50,
          opacity: 0,
          stagger: 0.032,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: textRef.current,
            start: 'top 72%',
          },
        });
      }

      const stats = sectionRef.current.querySelectorAll('.manifesto-stat');
      gsap.from(stats, {
        y: 30,
        opacity: 0,
        stagger: 0.12,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current.querySelector('.manifesto-stats'),
          start: 'top 80%',
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{
        position: 'relative',
        background: 'var(--cp-dark)',
        padding: '9rem 0',
        overflow: 'hidden',
      }}
    >
      {/* Parallax texture */}
      <div
        ref={bgRef}
        style={{
          position: 'absolute',
          inset: '-25%',
          backgroundImage: 'url(https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=1920&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.07,
          zIndex: 0,
        }}
      />

      {/* Radial vignette */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 30%, rgba(15,23,41,0.7) 100%)',
        zIndex: 1,
      }} />

      {/* Blue glow accent */}
      <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '40%',
        height: '60%',
        background: 'radial-gradient(ellipse at center, rgba(0,153,216,0.06) 0%, transparent 70%)',
        zIndex: 1,
      }} />

      <div style={{
        position: 'relative',
        zIndex: 2,
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 1.5rem',
      }}>
        <div style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.625rem',
          letterSpacing: '0.14em',
          color: 'rgba(0,153,216,0.65)',
          textTransform: 'uppercase',
          marginBottom: '2.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
        }}>
          <span style={{ display: 'inline-block', width: '24px', height: '1px', background: 'rgba(0,153,216,0.5)' }} />
          Our Commitment to You
        </div>

        <div ref={textRef}>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: 'clamp(0.9375rem, 1.5vw, 1.125rem)',
            color: 'rgba(255,255,255,0.35)',
            marginBottom: '2.5rem',
            lineHeight: 1.8,
            maxWidth: '680px',
          }}>
            <SplitWords text="Most residents don't know who represents them, what's being voted on, or how to make their voice heard. That's not their fault. That's a failure of access." />
          </p>

          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(2.25rem, 5.5vw, 5rem)',
            lineHeight: 1.08,
            color: 'white',
            maxWidth: '820px',
            letterSpacing: '-0.025em',
          }}>
            <SplitWords text="We believe every resident deserves" />
            <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
              <em
                className="manifesto-word"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--cp-primary)',
                }}
              >
                easy access&nbsp;
              </em>
            </span>
            <SplitWords text="to the decisions shaping their" />
            <span style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'bottom' }}>
              <em
                className="manifesto-word"
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                }}
              >
                neighborhood.
              </em>
            </span>
          </h2>
        </div>

        <div
          className="manifesto-stats"
          style={{
            marginTop: '4.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: '0',
            maxWidth: '720px',
          }}
        >
          {[
            { num: '982', label: 'Community entities indexed' },
            { num: '1,277', label: 'Budget votes cast in 2026' },
            { num: '0', label: 'Pedestrian fatalities in 2024–26' },
          ].map((item, i) => (
            <div
              key={item.num}
              className="manifesto-stat"
              style={{
                borderLeft: `2px solid ${i === 0 ? 'var(--cp-primary)' : 'rgba(255,255,255,0.1)'}`,
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
              }}
            >
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                color: 'white',
                lineHeight: 1,
                letterSpacing: '-0.02em',
              }}>
                {item.num}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: 'rgba(255,255,255,0.35)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginTop: '0.4rem',
                lineHeight: 1.4,
              }}>
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
