import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import HeroSection from '../../../../components/HeroSection';
import OfficialsSection from '../../../../components/OfficialsSection';
import EventsSection from '../../../../components/EventsSection';
import AgenciesSection from '../../../../components/AgenciesSection';
import CommunitySection from '../../../../components/CommunitySection';
import {
  districtMeta,
  officials,
  events,
  agencies,
  legislation,
  benefits,
  communityHighlights,
  quickStats,
} from '../../../../data/illinois/chicago/48thward/wardData';

export default function WardPage() {
  return (
    <>
      <Navbar districtName={districtMeta.name} stateName={districtMeta.state} />
      <main>
        <HeroSection district={districtMeta} stats={quickStats} />
        <OfficialsSection officials={officials} />
        <EventsSection events={events} />

        {/* Community Directory CTA Section */}
        <section id="directory-cta" className="section" style={{ background: 'var(--cp-bg-alt)' }}>
          <div className="container">
            <div className="section-header">
              <span className="section-tag">Community Resource</span>
              <h2 className="section-title">Explore the 48th Ward</h2>
              <p className="section-subtitle">
                Access a comprehensive, resident-verified directory of our neighborhood's schools, houses of worship, arts organizations, and local businesses.
              </p>
            </div>

            <div style={{ marginTop: '2.5rem', textAlign: 'center' }}>
              <Link to="/directory" className="btn btn-primary btn-lg">
                Open Community Directory <ChevronRight size={18} />
              </Link>
            </div>

            <div className="directory-preview" style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
              gap: '1.25rem', 
              marginTop: '3.5rem' 
            }}>
              {[
                { name: 'Education & Youth', slug: 'Education & Youth' },
                { name: 'Civic & Spiritual', slug: 'Civic & Spiritual' },
                { name: 'Arts & Culture', slug: 'Arts & Culture' },
                { name: 'Dining & Nightlife', slug: 'Dining & Nightlife' }
              ].map(cat => (
                <Link to={`/directory/${encodeURIComponent(cat.slug)}`} key={cat.name} className="glass-card" style={{ padding: '1.75rem', textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                  <h3 style={{ fontSize: '1rem', marginBottom: '0.4rem' }}>{cat.name}</h3>
                  <span style={{ fontSize: '0.75rem', color: 'var(--cp-blue)', fontWeight: 600 }}>Explore →</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <AgenciesSection agencies={agencies} />
        <CommunitySection highlights={communityHighlights} />

        {/* CTA Banner */}
        <section className="section" style={{ paddingBottom: '3rem' }}>
          <div className="container">
            <div className="glass-card" style={{
              padding: '2.5rem',
              textAlign: 'center',
              background: 'linear-gradient(135deg, var(--cp-blue-glow), rgba(8, 185, 236, 0.05))',
              border: '1px solid var(--cp-card-border)',
            }}>
              <h2 style={{ marginBottom: '0.75rem' }}>Get Involved in Your Community</h2>
              <p style={{ maxWidth: 560, margin: '0 auto 1.5rem', fontSize: '1rem' }}>
                Build a culture where people want to know about their communities, activate resources relevant to them, and participate in the political process.
              </p>
              <div style={{ display: 'flex', gap: '0.75rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="https://ova.elections.il.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                  Register to Vote
                </a>
                <a href="https://www.the48thward.org/service-request" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Submit a Service Request
                </a>
                <a href="https://mailchi.mp/the48thward/newsletter-signup" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                  Subscribe to Newsletter
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer districtMeta={districtMeta} />
    </>
  );
}
