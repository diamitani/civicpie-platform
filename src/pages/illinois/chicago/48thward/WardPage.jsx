import Navbar from '../../../../components/Navbar';
import Footer from '../../../../components/Footer';
import HeroSection from '../../../../components/HeroSection';
import OfficialsSection from '../../../../components/OfficialsSection';
import EventsSection from '../../../../components/EventsSection';
import AgenciesSection from '../../../../components/AgenciesSection';
import LegislationSection from '../../../../components/LegislationSection';
import BenefitsSection from '../../../../components/BenefitsSection';
import CommunitySection from '../../../../components/CommunitySection';
import BusinessDirectory from '../../../../components/BusinessDirectory';
import {
  districtMeta,
  officials,
  events,
  agencies,
  legislation,
  benefits,
  communityHighlights,
  wardBusinesses,
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
        <BusinessDirectory businesses={wardBusinesses} />
        <AgenciesSection agencies={agencies} />
        <LegislationSection legislation={legislation} />
        <BenefitsSection benefits={benefits} />
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
