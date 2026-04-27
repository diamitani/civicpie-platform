const TIERS = [
  {
    name: 'Resident',
    tagline: 'Start here',
    description: 'Access the full civic data platform, explore the community directory, and stay informed on ward news.',
    actions: [
      'View your elected officials',
      'Browse 982+ community entities',
      'Track local legislation',
      'Access city service links',
    ],
    cta: { label: 'Explore the Ward', href: '#officials' },
    featured: false,
  },
  {
    name: 'Advocate',
    tagline: 'Most impactful',
    description: 'Attend Ward Nights, participate in the annual $1M Participatory Budget vote, and submit 311 service requests.',
    actions: [
      'Attend monthly Ward Nights',
      'Vote on the $1M community budget',
      'Submit 311 service requests',
      'Subscribe to ward newsletter',
    ],
    cta: { label: 'Get Engaged', href: 'https://the48thward.org/participatory-budgeting', external: true },
    featured: true,
  },
  {
    name: 'Champion',
    tagline: 'Lead your block',
    description: 'Volunteer at the ward office, lead community initiatives, and amplify civic participation in your neighborhood.',
    actions: [
      'Volunteer at ward office',
      'Lead block club meetings',
      'Mentor civic newcomers',
      'Participate in zoning input',
    ],
    cta: { label: 'Start Volunteering', href: 'https://the48thward.org/blog/front-desk-volunteer', external: true },
    featured: false,
  },
];

export default function GetInvolvedSection() {
  return (
    <section style={{ padding: '6rem 0', background: 'var(--cp-bg)' }}>
      <div style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.625rem',
            letterSpacing: '0.14em',
            color: 'var(--cp-primary)',
            textTransform: 'uppercase',
            marginBottom: '0.75rem',
          }}>
            // GET INVOLVED
          </div>
          <h2 style={{
            fontFamily: 'var(--font-sans)',
            fontWeight: 700,
            fontSize: 'clamp(1.875rem, 4vw, 3rem)',
            color: 'var(--cp-dark)',
            lineHeight: 1.15,
            letterSpacing: '-0.025em',
            marginBottom: '0.875rem',
          }}>
            Democracy runs on{' '}
            <em style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 400, color: 'var(--cp-primary)' }}>
              participation.
            </em>
          </h2>
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '1rem',
            color: 'var(--cp-gray-500)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            Every resident can make a difference. Choose how you want to get involved — from staying informed to leading change in your community.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '1.125rem',
          alignItems: 'start',
        }}>
          {TIERS.map((tier, i) => (
            <div
              key={tier.name}
              style={{
                background: tier.featured ? 'var(--cp-primary)' : '#ffffff',
                border: `1px solid ${tier.featured ? 'transparent' : 'rgba(0,0,0,0.07)'}`,
                borderRadius: '2rem',
                padding: '2.25rem',
                boxShadow: tier.featured
                  ? '0 16px 64px rgba(0,153,216,0.3)'
                  : '0 4px 24px rgba(0,0,0,0.06)',
                transform: tier.featured ? 'scale(1.03)' : 'scale(1)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {tier.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '9999px',
                  padding: '0.25rem 0.75rem',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.5625rem',
                  color: 'white',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                }}>
                  ★ {tier.tagline}
                </div>
              )}

              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.12em',
                  color: tier.featured ? 'rgba(255,255,255,0.55)' : 'var(--cp-gray-400)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  {!tier.featured && tier.tagline}
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: '1.625rem',
                  color: tier.featured ? 'white' : 'var(--cp-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.1,
                }}>
                  {tier.name}
                </h3>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.875rem',
                  color: tier.featured ? 'rgba(255,255,255,0.75)' : 'var(--cp-gray-500)',
                  marginTop: '0.625rem',
                  lineHeight: 1.6,
                }}>
                  {tier.description}
                </p>
              </div>

              <div style={{ marginBottom: '1.75rem' }}>
                {tier.actions.map((action, j) => (
                  <div
                    key={j}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.625rem',
                      padding: '0.5rem 0',
                      borderBottom: `1px solid ${tier.featured ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)'}`,
                    }}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <circle cx="7" cy="7" r="6" fill={tier.featured ? 'rgba(255,255,255,0.2)' : 'rgba(0,153,216,0.12)'} />
                      <path d="M4.5 7l2 2 3-3" stroke={tier.featured ? 'white' : 'var(--cp-primary)'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.8125rem',
                      color: tier.featured ? 'rgba(255,255,255,0.85)' : 'var(--cp-gray-600)',
                    }}>
                      {action}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href={tier.cta.href}
                target={tier.cta.external ? '_blank' : undefined}
                rel={tier.cta.external ? 'noopener noreferrer' : undefined}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'center',
                  padding: '0.875rem',
                  borderRadius: '0.875rem',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  textDecoration: 'none',
                  transition: 'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
                  background: tier.featured ? 'white' : 'transparent',
                  color: tier.featured ? 'var(--cp-primary)' : 'var(--cp-dark)',
                  border: tier.featured ? 'none' : '1px solid rgba(0,0,0,0.12)',
                  boxShadow: tier.featured ? '0 4px 16px rgba(0,0,0,0.12)' : 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'scale(1.03)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'scale(1)';
                }}
              >
                {tier.cta.label}
              </a>
            </div>
          ))}
        </div>

        {/* Bottom register CTA */}
        <div style={{
          marginTop: '3.5rem',
          background: 'var(--cp-dark)',
          borderRadius: '2rem',
          padding: 'clamp(2rem, 4vw, 3rem)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <div>
            <div style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.625rem',
              letterSpacing: '0.12em',
              color: 'rgba(0,153,216,0.65)',
              textTransform: 'uppercase',
              marginBottom: '0.5rem',
            }}>
              // First step
            </div>
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 700,
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1.15,
            }}>
              Not registered to vote yet?
            </h3>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.9375rem',
              color: 'rgba(255,255,255,0.5)',
              marginTop: '0.375rem',
            }}>
              It takes 2 minutes. Illinois makes it easy.
            </p>
          </div>
          <a
            href="https://ova.elections.il.gov/"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '0.9375rem',
              background: 'var(--cp-accent)',
              color: 'white',
              padding: '0.875rem 2rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(237,29,39,0.35)',
              transition: 'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
              flexShrink: 0,
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(237,29,39,0.5)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(237,29,39,0.35)';
            }}
          >
            Register to Vote
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
