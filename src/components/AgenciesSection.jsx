import { useState } from 'react';
import { Building, Phone, Mail, Globe, ExternalLink, ChevronDown, ChevronUp, Users } from 'lucide-react';

const typeColors = {
  'Ward Office': 'badge-blue',
  'City Service': 'badge-amber',
  'Social Services': 'badge-green',
  'Health': 'badge-red',
  'Infrastructure': 'badge-amber',
  'Business': 'badge-purple',
  'Elections': 'badge-teal',
  'State Agency': 'badge-purple',
};

function AgencyCard({ agency }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card agency-card">
      <div className="agency-header" onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        <div className="agency-icon-wrap">
          <Building size={20} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{ margin: 0, fontSize: '0.9375rem' }}>{agency.name}</h4>
          <div style={{ display: 'flex', gap: '0.375rem', marginTop: '0.375rem', flexWrap: 'wrap' }}>
            <span className={`badge ${typeColors[agency.type] || 'badge-blue'}`}>{agency.type}</span>
            <span className="badge badge-blue" style={{ opacity: 0.6 }}>{agency.level}</span>
          </div>
        </div>
        <button style={{ background: 'none', border: 'none', color: 'var(--cp-gray-500)', cursor: 'pointer', padding: 4 }}>
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
      </div>

      <p style={{ fontSize: '0.8125rem', margin: '0.75rem 0', color: 'var(--cp-gray-600)' }}>{agency.description}</p>

      {expanded && (
        <div className="agency-details">
          {agency.services && (
            <div style={{ marginBottom: '0.75rem' }}>
              <h5 className="detail-label">Services</h5>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem' }}>
                {agency.services.map((s, i) => (
                  <span key={i} className="service-chip">{s}</span>
                ))}
              </div>
            </div>
          )}

          {agency.keyPeople && (
            <div style={{ marginBottom: '0.75rem' }}>
              <h5 className="detail-label">Key People</h5>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                {agency.keyPeople.map((p, i) => (
                  <span key={i} style={{ fontSize: '0.75rem', color: 'var(--cp-gray-700)' }}>
                    <Users size={11} style={{ marginRight: 4 }} /> {p.name} — <span style={{ color: 'var(--cp-gray-500)' }}>{p.role}</span>
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="agency-contact-row">
            {agency.phone && <a href={`tel:${agency.phone}`} className="contact-chip"><Phone size={12} /> {agency.phone}</a>}
            {agency.email && <a href={`mailto:${agency.email}`} className="contact-chip"><Mail size={12} /> Email</a>}
            {agency.website && <a href={agency.website} target="_blank" rel="noopener noreferrer" className="contact-chip"><Globe size={12} /> Website <ExternalLink size={10} /></a>}
          </div>
        </div>
      )}

      <style>{`
        .agency-card { padding: 1.25rem; }
        .agency-header { display: flex; align-items: flex-start; gap: 0.75rem; }
        .agency-icon-wrap {
          width: 40px; height: 40px; border-radius: 10px;
          background: var(--cp-blue-glow);
          display: flex; align-items: center; justify-content: center;
          color: var(--cp-blue-light); flex-shrink: 0;
        }
        .agency-details {
          padding-top: 0.75rem;
          border-top: 1px solid var(--cp-card-border);
          animation: fadeIn 0.3s ease;
        }
        .detail-label {
          font-size: 0.6875rem; text-transform: uppercase;
          letter-spacing: 0.08em; color: var(--cp-gray-500);
          margin-bottom: 0.375rem;
        }
        .service-chip {
          padding: 0.2rem 0.5rem; border-radius: var(--radius-full);
          font-size: 0.6875rem; background: var(--cp-gray-100);
          color: var(--cp-gray-700); border: 1px solid var(--cp-card-border);
        }
        .agency-contact-row { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .contact-chip {
          display: flex; align-items: center; gap: 4px;
          padding: 0.25rem 0.625rem; border-radius: var(--radius-full);
          font-size: 0.6875rem; color: var(--cp-gray-600);
          background: var(--cp-gray-50); border: 1px solid var(--cp-card-border);
          transition: all 150ms;
        }
        .contact-chip:hover { color: var(--cp-gray-900); border-color: var(--cp-gray-300); }
      `}</style>
    </div>
  );
}

export default function AgenciesSection({ agencies }) {
  return (
    <section id="agencies" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><Building size={18} /></div>
            <h2>Agencies & Organizations</h2>
          </div>
        </div>
        <div className="grid-2">
          {agencies.map(a => <AgencyCard key={a.id} agency={a} />)}
        </div>
      </div>
    </section>
  );
}
