import { Link } from 'react-router-dom';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import HeroSection from '../../../../components/HeroSection';
import FeaturesSection from '../../../../components/FeaturesSection';
import ManifestoSection from '../../../../components/ManifestoSection';
import ProtocolSection from '../../../../components/ProtocolSection';
import GetInvolvedSection from '../../../../components/GetInvolvedSection';
import OfficialsSection from '../../../../components/OfficialsSection';
import EventsSection from '../../../../components/EventsSection';
import AgenciesSection from '../../../../components/AgenciesSection';
import CommunitySection from '../../../../components/CommunitySection';
import {
  districtMeta,
  officials,
  events,
  agencies,
  civicGroups,
  communityHighlights,
  quickStats,
} from '../../../../data/illinois/chicago/48thward/wardData';

export default function WardPage() {
  return (
    <>
      <Navbar districtName={districtMeta.name} stateName={districtMeta.state} />
      <main>
        <HeroSection district={districtMeta} stats={quickStats} />
        <FeaturesSection />
        <OfficialsSection officials={officials} />
        <EventsSection events={events} />
        <ManifestoSection />
        <ProtocolSection />

        {/* Community Directory CTA */}
        <section style={{ padding: '5rem 0', background: 'var(--cp-bg-alt)' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1.5rem',
              marginBottom: '2.5rem',
            }}>
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.625rem',
                  letterSpacing: '0.14em',
                  color: 'var(--cp-primary)',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                }}>
                  // COMMUNITY DIRECTORY
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 700,
                  fontSize: 'clamp(1.5rem, 3vw, 2.25rem)',
                  color: 'var(--cp-dark)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1.15,
                }}>
                  Find what's in your ward
                </h2>
                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.9375rem',
                  color: 'var(--cp-gray-500)',
                  marginTop: '0.5rem',
                  maxWidth: '520px',
                  lineHeight: 1.65,
                }}>
                  Schools, houses of worship, arts organizations, local businesses, and community resources — all resident-verified and searchable.
                </p>
              </div>
              <Link
                to="/directory"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 600,
                  fontSize: '0.9375rem',
                  background: 'var(--cp-dark)',
                  color: 'white',
                  padding: '0.875rem 1.75rem',
                  borderRadius: '9999px',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.25s ease',
                  flexShrink: 0,
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--cp-primary)'; e.currentTarget.style.transform = 'scale(1.03)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--cp-dark)'; e.currentTarget.style.transform = 'scale(1)'; }}
              >
                Open Full Directory
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1rem',
            }}>
              {[
                { name: 'Education & Youth', icon: '🏫', count: '47' },
                { name: 'Civic & Spiritual', icon: '🏛️', count: '83' },
                { name: 'Arts & Culture', icon: '🎭', count: '62' },
                { name: 'Dining & Nightlife', icon: '🍽️', count: '138' },
              ].map(cat => (
                <Link
                  to={`/directory/${encodeURIComponent(cat.name)}`}
                  key={cat.name}
                  style={{
                    background: 'white',
                    border: '1px solid rgba(0,0,0,0.07)',
                    borderRadius: '1.5rem',
                    padding: '1.5rem',
                    textDecoration: 'none',
                    color: 'inherit',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.875rem',
                    transition: 'all 0.25s cubic-bezier(0.25,0.46,0.45,0.94)',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = 'translateY(-3px)';
                    e.currentTarget.style.boxShadow = '0 8px 32px rgba(0,0,0,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(0,153,216,0.2)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.07)';
                  }}
                >
                  <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>{cat.icon}</span>
                  <div>
                    <div style={{ fontFamily: 'var(--font-sans)', fontWeight: 600, fontSize: '0.9rem', color: 'var(--cp-dark)' }}>
                      {cat.name}
                    </div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.5625rem', color: 'var(--cp-gray-400)', letterSpacing: '0.06em', marginTop: '2px' }}>
                      {cat.count}+ entries
                    </div>
                  </div>
                  <svg style={{ marginLeft: 'auto', flexShrink: 0 }} width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 7h8M7 3l4 4-4 4" stroke="var(--cp-gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AgenciesSection agencies={agencies} civicGroups={civicGroups} />
        <GetInvolvedSection />
        <CommunitySection highlights={communityHighlights} />
      </main>
      <Footer districtMeta={districtMeta} />
    </>
  );
}
