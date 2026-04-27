import { useEffect, useRef, useState } from 'react';

const BUDGET_ITEMS = [
  { label: 'School Pedestrian Safety', amount: '$165K', votes: 342 },
  { label: 'Sidewalk Accessibility', amount: '$140K', votes: 289 },
  { label: 'Lakefront Placemaking', amount: '$120K', votes: 267 },
  { label: 'Public Art & Murals', amount: '$85K', votes: 243 },
];

const CIVIC_FEED = [
  'APS signals approved — Sheridan & Balmoral',
  'Broadway upzoning proposal advances in committee',
  'Ward Night: Mon May 4 @ 6:00 PM, 6012 N Broadway',
  '1,277 votes cast in 2026 Participatory Budgeting',
  'Bryn Mawr Historic District: landmark status pending',
  'Spring street resurfacing begins — 55 ward streets',
];

const DAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

function ShufflerCard() {
  const [items, setItems] = useState(BUDGET_ITEMS);

  useEffect(() => {
    const id = setInterval(() => {
      setItems(prev => {
        const next = [...prev];
        next.unshift(next.pop());
        return next;
      });
    }, 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <div style={cardBase}>
      <div style={cardHeader}>
        <div style={overline}>// PARTICIPATORY BUDGET</div>
        <h3 style={cardTitle}>$1M Community Vote</h3>
        <p style={cardDesc}>Residents decide how the ward's infrastructure budget is spent each year.</p>
      </div>

      <div style={{ position: 'relative', height: '196px', marginTop: '0.5rem' }}>
        {items.map((item, i) => (
          <div
            key={item.label}
            style={{
              position: 'absolute',
              left: 0,
              right: 0,
              background: i === 0 ? 'var(--cp-primary)' : '#ffffff',
              border: `1px solid ${i === 0 ? 'transparent' : 'rgba(0,0,0,0.06)'}`,
              borderRadius: '1rem',
              padding: '0.875rem 1rem',
              top: `${i * 44}px`,
              zIndex: 4 - i,
              opacity: 1 - i * 0.14,
              transform: `scale(${1 - i * 0.025})`,
              transformOrigin: 'center bottom',
              transition: 'all 0.5s cubic-bezier(0.34,1.56,0.64,1)',
              boxShadow: i === 0 ? '0 8px 28px rgba(0,153,216,0.28)' : '0 2px 8px rgba(0,0,0,0.05)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.875rem',
              color: i === 0 ? 'white' : 'var(--cp-dark)',
            }}>
              {item.label}
            </span>
            <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '0.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.875rem',
                color: i === 0 ? 'white' : 'var(--cp-primary)',
              }}>
                {item.amount}
              </div>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                color: i === 0 ? 'rgba(255,255,255,0.65)' : 'var(--cp-gray-400)',
              }}>
                {item.votes} votes
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function TypewriterCard() {
  const [msgIdx, setMsgIdx] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const msg = CIVIC_FEED[msgIdx];
    let i = 0;
    setText('');
    setTyping(true);

    const id = setInterval(() => {
      if (i < msg.length) {
        setText(msg.slice(0, i + 1));
        i++;
      } else {
        clearInterval(id);
        setTyping(false);
        setTimeout(() => setMsgIdx(prev => (prev + 1) % CIVIC_FEED.length), 2200);
      }
    }, 42);

    return () => clearInterval(id);
  }, [msgIdx]);

  return (
    <div style={cardBase}>
      <div style={{ ...cardHeader, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <div>
          <div style={overline}>// LIVE CIVIC FEED</div>
          <h3 style={cardTitle}>Ward Updates</h3>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0, paddingTop: '2px' }}>
          <span style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
            animation: 'pulse-dot 2s ease-in-out infinite',
            boxShadow: '0 0 8px rgba(34,197,94,0.6)',
          }} />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'var(--cp-gray-400)', letterSpacing: '0.08em' }}>LIVE</span>
        </div>
      </div>

      <div style={{
        background: 'var(--cp-dark)',
        borderRadius: '1.125rem',
        padding: '1.25rem',
        flex: 1,
        minHeight: '148px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}>
        <div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.625rem', color: 'rgba(0,153,216,0.55)', marginBottom: '0.625rem' }}>
            48thward.civic.log &gt;&gt;
          </div>
          <p style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.875rem',
            color: '#E2E8F0',
            lineHeight: 1.6,
            minHeight: '56px',
          }}>
            {text}
            <span style={{
              display: 'inline-block',
              width: '2px',
              height: '1em',
              background: 'var(--cp-primary)',
              marginLeft: '2px',
              verticalAlign: 'text-bottom',
              animation: 'blink-cursor 1s step-end infinite',
            }} />
          </p>
        </div>

        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '0.75rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['legislation', 'events', 'budget'].map(tag => (
            <span key={tag} style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5625rem',
              color: 'rgba(0,153,216,0.55)',
              background: 'rgba(0,153,216,0.08)',
              padding: '0.2rem 0.5rem',
              borderRadius: '0.3rem',
              letterSpacing: '0.04em',
            }}>
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function SchedulerCard() {
  const [active, setActive] = useState(false);
  const [saved, setSaved] = useState(false);
  const [pressing, setPressing] = useState(false);

  useEffect(() => {
    let t1, t2, t3, t4;
    const sequence = () => {
      setActive(false);
      setSaved(false);
      setPressing(false);
      t1 = setTimeout(() => setPressing(true), 800);
      t2 = setTimeout(() => { setPressing(false); setActive(true); }, 1200);
      t3 = setTimeout(() => setSaved(true), 2600);
      t4 = setTimeout(() => {
        setActive(false);
        setSaved(false);
        setTimeout(sequence, 1400);
      }, 4200);
    };
    const init = setTimeout(sequence, 600);
    return () => [init, t1, t2, t3, t4].forEach(clearTimeout);
  }, []);

  const week1 = [null, 5, 6, 7, 8, 9, 10];
  const week2 = [11, 12, 13, 14, 15, 16, 17];

  return (
    <div style={cardBase}>
      <div style={cardHeader}>
        <div style={overline}>// WARD NIGHT SCHEDULE</div>
        <h3 style={cardTitle}>Monthly Meetings</h3>
        <p style={cardDesc}>Every 1st & 3rd Monday — 6 PM at 6012 N Broadway</p>
      </div>

      <div style={{
        background: 'var(--cp-bg)',
        borderRadius: '1.125rem',
        padding: '1rem',
        border: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: '6px' }}>
          {DAYS.map((d, i) => (
            <div key={i} style={{
              textAlign: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.5625rem',
              color: i === 1 ? 'var(--cp-primary)' : 'var(--cp-gray-400)',
              fontWeight: i === 1 ? 700 : 400,
              padding: '2px 0',
              letterSpacing: '0.06em',
            }}>
              {d}
            </div>
          ))}
        </div>

        {[week1, week2].map((week, wi) => (
          <div key={wi} style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', marginBottom: wi === 0 ? '4px' : 0 }}>
            {week.map((n, i) => {
              const isMon = i === 1;
              const isActive = isMon && active;
              const isPressing = isMon && pressing && wi === 0;
              return (
                <div key={i} style={{
                  height: '34px',
                  borderRadius: '8px',
                  background: isActive ? 'var(--cp-primary)' : isMon ? 'rgba(0,153,216,0.08)' : '#fff',
                  border: `1px solid ${isActive ? 'transparent' : isMon ? 'rgba(0,153,216,0.2)' : 'rgba(0,0,0,0.06)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: isMon ? 700 : 400,
                  color: isActive ? 'white' : isMon ? 'var(--cp-primary)' : 'var(--cp-gray-400)',
                  transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                  transform: isPressing ? 'scale(0.93)' : 'scale(1)',
                  position: 'relative',
                  boxShadow: isActive && wi === 0 ? '0 4px 12px rgba(0,153,216,0.3)' : 'none',
                }}>
                  {n === null ? '' : n}
                  {isMon && n !== null && (
                    <span style={{
                      position: 'absolute',
                      bottom: '3px',
                      width: '3px',
                      height: '3px',
                      borderRadius: '50%',
                      background: isActive ? 'rgba(255,255,255,0.8)' : 'var(--cp-primary)',
                    }} />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>

      <button style={{
        width: '100%',
        marginTop: '0.875rem',
        padding: '0.75rem',
        borderRadius: '0.875rem',
        background: saved ? 'var(--cp-primary)' : 'transparent',
        border: `1px solid ${saved ? 'var(--cp-primary)' : 'rgba(0,0,0,0.08)'}`,
        color: saved ? 'white' : 'var(--cp-gray-400)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.75rem',
        fontWeight: 700,
        cursor: 'default',
        transition: 'all 0.35s cubic-bezier(0.25,0.46,0.45,0.94)',
        transform: saved ? 'scale(1.02)' : 'scale(1)',
        letterSpacing: '0.04em',
      }}>
        {saved ? '✓  WARD NIGHT ADDED' : 'ADD TO CALENDAR'}
      </button>
    </div>
  );
}

/* ── Shared card styles ── */
const cardBase = {
  background: '#ffffff',
  border: '1px solid rgba(0,0,0,0.06)',
  borderRadius: '2rem',
  padding: '1.75rem',
  boxShadow: '0 4px 28px rgba(0,0,0,0.06)',
  display: 'flex',
  flexDirection: 'column',
};
const cardHeader = { marginBottom: '1.25rem' };
const overline = {
  fontFamily: 'var(--font-mono)',
  fontSize: '0.625rem',
  letterSpacing: '0.12em',
  color: 'var(--cp-primary)',
  textTransform: 'uppercase',
  marginBottom: '0.5rem',
};
const cardTitle = {
  fontFamily: 'var(--font-sans)',
  fontWeight: 700,
  fontSize: '1.125rem',
  color: 'var(--cp-dark)',
  lineHeight: 1.2,
};
const cardDesc = {
  fontFamily: 'var(--font-sans)',
  fontSize: '0.8125rem',
  color: 'var(--cp-gray-400)',
  marginTop: '0.25rem',
};

export default function FeaturesSection() {
  return (
    <section style={{ padding: '6rem 0 5rem', background: 'var(--cp-bg)' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ marginBottom: '3.5rem', maxWidth: '560px' }}>
          <div style={overline}>// PLATFORM FEATURES</div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(1.875rem, 4vw, 2.75rem)',
            color: 'var(--cp-dark)',
            lineHeight: 1.15,
            marginBottom: '0.875rem',
            letterSpacing: '-0.02em',
          }}>
            Not just information.{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cp-primary)' }}>
              Instruments for action.
            </em>
          </h2>
          <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1rem', color: 'var(--cp-gray-500)', lineHeight: 1.7 }}>
            Three live tools that turn civic data into meaningful participation.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.125rem',
        }}>
          <ShufflerCard />
          <TypewriterCard />
          <SchedulerCard />
        </div>
      </div>
    </section>
  );
}
