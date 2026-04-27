import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/* ── Animation 1: Rotating ward rings ── */
function RingsAnimation() {
  return (
    <svg width="220" height="220" viewBox="0 0 220 220" style={{ display: 'block' }}>
      <defs>
        <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="rgba(0,153,216,0.3)" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
      </defs>
      <circle cx="110" cy="110" r="90" fill="url(#glow1)" />
      <g style={{ transformOrigin: '110px 110px', animation: 'rotate-slow 28s linear infinite' }}>
        <circle cx="110" cy="110" r="90" fill="none" stroke="rgba(0,153,216,0.2)" strokeWidth="1" strokeDasharray="6 4" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <circle key={i} cx={110 + 90 * Math.cos(rad)} cy={110 + 90 * Math.sin(rad)} r="3" fill="rgba(0,153,216,0.5)" />;
        })}
      </g>
      <g style={{ transformOrigin: '110px 110px', animation: 'rotate-reverse 18s linear infinite' }}>
        <circle cx="110" cy="110" r="64" fill="none" stroke="rgba(0,153,216,0.25)" strokeWidth="1" strokeDasharray="4 6" />
        {[22, 112, 202, 292].map((a, i) => {
          const rad = (a * Math.PI) / 180;
          return <circle key={i} cx={110 + 64 * Math.cos(rad)} cy={110 + 64 * Math.sin(rad)} r="2.5" fill="rgba(0,153,216,0.4)" />;
        })}
      </g>
      <circle cx="110" cy="110" r="38" fill="none" stroke="rgba(0,153,216,0.35)" strokeWidth="1.5" />
      <circle cx="110" cy="110" r="10" fill="rgba(0,153,216,0.25)" />
      <circle cx="110" cy="110" r="5" fill="var(--cp-primary)" opacity="0.9" />
      <text x="110" y="148" textAnchor="middle" fontFamily="Space Mono" fontSize="9" fill="rgba(0,153,216,0.6)" letterSpacing="1">
        48TH WARD
      </text>
    </svg>
  );
}

/* ── Animation 2: Data grid scanner ── */
function ScannerCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let scanY = -20;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const cols = 11, rows = 7;
      const cw = canvas.width / cols;
      const ch = canvas.height / rows;

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cw + cw / 2;
          const y = r * ch + ch / 2;
          const dist = Math.abs(scanY - y);
          const glow = Math.max(0, 1 - dist / 36);
          ctx.beginPath();
          ctx.arc(x, y, 2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(0,153,216,${0.12 + glow * 0.72})`;
          ctx.fill();

          if (glow > 0.6) {
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,153,216,${(glow - 0.6) * 0.25})`;
            ctx.fill();
          }
        }
      }

      const grad = ctx.createLinearGradient(0, scanY - 18, 0, scanY + 18);
      grad.addColorStop(0, 'transparent');
      grad.addColorStop(0.35, 'rgba(0,153,216,0.07)');
      grad.addColorStop(0.5, 'rgba(0,153,216,0.45)');
      grad.addColorStop(0.65, 'rgba(0,153,216,0.07)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 18, canvas.width, 36);

      scanY += 0.8;
      if (scanY > canvas.height + 20) scanY = -20;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      width={220}
      height={160}
      style={{ display: 'block', borderRadius: '12px', opacity: 0.95 }}
    />
  );
}

/* ── Animation 3: EKG waveform ── */
function EKGAnimation() {
  const totalLen = 520;
  return (
    <svg width="220" height="120" viewBox="0 0 220 120" style={{ display: 'block' }}>
      <defs>
        <linearGradient id="ekgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="rgba(0,153,216,0)" />
          <stop offset="30%" stopColor="rgba(0,153,216,0.7)" />
          <stop offset="70%" stopColor="rgba(0,153,216,0.7)" />
          <stop offset="100%" stopColor="rgba(0,153,216,0)" />
        </linearGradient>
      </defs>
      <line x1="0" y1="60" x2="220" y2="60" stroke="rgba(0,153,216,0.08)" strokeWidth="1" />
      <path
        d="M0,60 L28,60 L34,60 L38,22 L46,98 L52,40 L58,60 L90,60 L94,60 L98,28 L106,92 L112,44 L118,60 L155,60 L159,60 L163,24 L171,96 L177,42 L183,60 L220,60"
        fill="none"
        stroke="url(#ekgGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray={totalLen}
        strokeDashoffset={totalLen}
        style={{ animation: 'ekg-draw 1.8s cubic-bezier(0.4,0,0.2,1) infinite' }}
      />
      <circle cx="110" cy="60" r="3" fill="var(--cp-primary)" opacity="0.6">
        <animate attributeName="opacity" values="0.6;1;0.6" dur="1.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
}

const CARDS = [
  {
    num: '01',
    title: 'Get Informed',
    subtitle: 'Know who represents you',
    body: 'Find your elected officials, see what they\'re voting on, explore community organizations, and discover services available to you — everything your ward offers, in one place.',
    animation: <RingsAnimation />,
    bg: '#ffffff',
    textColor: 'var(--cp-dark)',
  },
  {
    num: '02',
    title: 'Get Involved',
    subtitle: 'Show up for your community',
    body: 'Attend Ward Nights, vote on how your tax dollars are spent in the $1M Participatory Budget, submit 311 requests, and connect with local events happening in your neighborhood.',
    animation: <ScannerCanvas />,
    bg: 'var(--cp-primary)',
    textColor: 'white',
  },
  {
    num: '03',
    title: 'Make Change',
    subtitle: 'Hold your government accountable',
    body: 'Track how officials vote, follow zoning and safety decisions before they\'re finalized, and use real data to advocate for the changes your block needs. Your voice matters.',
    animation: <EKGAnimation />,
    bg: 'var(--cp-dark)',
    textColor: 'white',
  },
];

export default function ProtocolSection() {
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, i) => {
        if (!card || i === CARDS.length - 1) return;

        gsap.to(card, {
          scale: 0.92,
          filter: 'blur(10px)',
          opacity: 0.45,
          ease: 'none',
          scrollTrigger: {
            trigger: cardRefs.current[i + 1],
            start: 'top 70%',
            end: 'top 20%',
            scrub: 0.6,
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ padding: '5rem 0 0', background: 'var(--cp-bg)' }}
    >
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '3.5rem', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.14em',
              color: 'var(--cp-primary)',
              textTransform: 'uppercase',
              marginBottom: '0.6rem',
            }}>
              // HOW TO GET INVOLVED
            </div>
            <h2 style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
              color: 'var(--cp-dark)',
              lineHeight: 1.15,
              letterSpacing: '-0.02em',
            }}>
              Three ways to make your{' '}
              <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400 }}>voice heard.</em>
            </h2>
          </div>
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6875rem',
            color: 'var(--cp-gray-400)',
          }}>
            Scroll to explore →
          </span>
        </div>
      </div>

      {/* Stacking cards */}
      <div style={{ position: 'relative' }}>
        {CARDS.map((card, i) => (
          <div
            key={i}
            ref={el => cardRefs.current[i] = el}
            style={{
              position: 'sticky',
              top: `${i * 20}px`,
              zIndex: i + 1,
              margin: '0 auto',
              width: '100%',
              maxWidth: '1200px',
              padding: '0 1.5rem',
              paddingBottom: i === CARDS.length - 1 ? '5rem' : '1.5rem',
            }}
          >
            <div style={{
              background: card.bg,
              borderRadius: '2.5rem',
              padding: 'clamp(2rem, 4vw, 3.5rem)',
              boxShadow: i === 0
                ? '0 8px 60px rgba(0,0,0,0.08)'
                : i === 1
                ? '0 12px 80px rgba(0,153,216,0.25)'
                : '0 12px 80px rgba(15,23,41,0.3)',
              display: 'grid',
              gridTemplateColumns: '1fr auto',
              gap: 'clamp(1.5rem, 4vw, 4rem)',
              alignItems: 'center',
              minHeight: '280px',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                  color: i === 1 ? 'rgba(255,255,255,0.5)' : i === 2 ? 'rgba(0,153,216,0.6)' : 'var(--cp-gray-400)',
                  textTransform: 'uppercase',
                  marginBottom: '1rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: i === 1 ? 'rgba(255,255,255,0.35)' : i === 2 ? 'rgba(0,153,216,0.3)' : 'var(--cp-gray-200)',
                    letterSpacing: '-0.02em',
                  }}>
                    {card.num}
                  </span>
                  {card.subtitle}
                </div>

                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
                  color: card.textColor,
                  lineHeight: 1.1,
                  letterSpacing: '-0.025em',
                  marginBottom: '1.25rem',
                }}>
                  {card.title}
                </h3>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: 'clamp(0.875rem, 1.4vw, 1.0625rem)',
                  color: i === 0 ? 'var(--cp-gray-500)' : 'rgba(255,255,255,0.65)',
                  lineHeight: 1.75,
                  maxWidth: '480px',
                }}>
                  {card.body}
                </p>
              </div>

              <div style={{
                flexShrink: 0,
                opacity: 0.85,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.5rem',
              }}>
                {card.animation}
              </div>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        @media (max-width: 680px) {
          .protocol-card-inner { grid-template-columns: 1fr !important; }
          .protocol-anim { display: none; }
        }
      `}</style>
    </section>
  );
}
