import { useState } from 'react';
import { Building, Phone, Mail, Globe, ExternalLink, ChevronDown, ChevronUp, Users } from 'lucide-react';

const typeColors = {
  'Ward Office': 'badge-blue',
  'City Service': 'badge-amber',
  'City Department': 'badge-amber',
  'Social Services': 'badge-green',
  'Health': 'badge-red',
  'Infrastructure': 'badge-amber',
  'Business': 'badge-purple',
  'Elections': 'badge-teal',
  'State Agency': 'badge-purple',
  'County Agency': 'badge-teal',
  'Federal Agency': 'badge-blue',
};

const civicTypeColors = {
  'Political Org': 'badge-blue',
  'Neighborhood Org': 'badge-green',
  'Advocacy': 'badge-amber',
  'Cultural': 'badge-purple',
  'Health': 'badge-red',
  'Youth': 'badge-teal',
  'Community Development': 'badge-green',
  'Civic': 'badge-blue',
  'Social Services': 'badge-green',
};

const LEVELS = ['All', 'Local', 'City', 'County', 'State', 'Federal', 'Civic Groups'];

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

function CivicGroupCard({ group }) {
  return (
    <div className="glass-card civic-group-card">
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
        <div className="civic-icon-wrap">
          <Users size={18} />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <h4 style={{ margin: 0, fontSize: '0.9375rem', color: 'var(--cp-dark)' }}>{group.name}</h4>
          <div style={{ display: 'flex', gap: '0.375rem', marginTop: '0.375rem', flexWrap: 'wrap' }}>
            <span className={`badge ${civicTypeColors[group.type] || 'badge-blue'}`}>{group.type}</span>
          </div>
        </div>
      </div>

      <p style={{ fontSize: '0.8rem', margin: '0.625rem 0 0.375rem', color: 'var(--cp-primary)', fontWeight: 600 }}>
        {group.focus}
      </p>
      <p style={{ fontSize: '0.8125rem', margin: '0.375rem 0 0.75rem', color: 'var(--cp-gray-600)', lineHeight: 1.55 }}>
        {group.description}
      </p>

      <div style={{ display: 'flex', gap: '0.375rem', flexWrap: 'wrap', marginBottom: group.website ? '0.75rem' : 0 }}>
        {(group.tags || []).map((tag, i) => (
          <span key={i} className="service-chip">{tag}</span>
        ))}
      </div>

      {group.website && (
        <div style={{ display: 'flex' }}>
          <a
            href={group.website}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-chip"
          >
            <Globe size={12} /> Website <ExternalLink size={10} />
          </a>
        </div>
      )}

      <style>{`
        .civic-group-card { padding: 1.25rem; }
        .civic-icon-wrap {
          width: 38px; height: 38px; border-radius: 10px;
          background: rgba(0,153,216,0.1);
          display: flex; align-items: center; justify-content: center;
          color: var(--cp-primary); flex-shrink: 0;
        }
      `}</style>
    </div>
  );
}

function TabPill({ label, count, active, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.375rem',
        padding: '0.375rem 0.875rem',
        borderRadius: '9999px',
        border: active ? '1.5px solid var(--cp-primary)' : '1.5px solid var(--cp-card-border, #e2e8f0)',
        background: active ? 'var(--cp-primary)' : 'transparent',
        color: active ? '#ffffff' : 'var(--cp-gray-600)',
        fontSize: '0.8125rem',
        fontWeight: active ? 600 : 400,
        fontFamily: 'var(--font-sans)',
        cursor: 'pointer',
        transition: 'all 150ms ease',
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--cp-primary)';
          e.currentTarget.style.color = 'var(--cp-primary)';
        }
      }}
      onMouseLeave={e => {
        if (!active) {
          e.currentTarget.style.borderColor = 'var(--cp-card-border, #e2e8f0)';
          e.currentTarget.style.color = 'var(--cp-gray-600)';
        }
      }}
    >
      {label}
      <span style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        minWidth: '1.25rem',
        height: '1.25rem',
        borderRadius: '9999px',
        fontSize: '0.625rem',
        fontWeight: 700,
        background: active ? 'rgba(255,255,255,0.25)' : 'var(--cp-gray-100, #f1f5f9)',
        color: active ? '#ffffff' : 'var(--cp-gray-500)',
        padding: '0 0.25rem',
      }}>
        {count}
      </span>
    </button>
  );
}

export default function AgenciesSection({ agencies, civicGroups = [] }) {
  const [activeTab, setActiveTab] = useState('All');

  const getCounts = () => {
    const counts = { 'All': agencies.length };
    ['Local', 'City', 'County', 'State', 'Federal'].forEach(level => {
      counts[level] = agencies.filter(a => a.level === level).length;
    });
    counts['Civic Groups'] = civicGroups.length;
    return counts;
  };

  const counts = getCounts();

  const filteredAgencies = activeTab === 'All'
    ? agencies
    : activeTab === 'Civic Groups'
    ? []
    : agencies.filter(a => a.level === activeTab);

  const showCivicGroups = activeTab === 'Civic Groups';

  return (
    <section id="agencies" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><Building size={18} /></div>
            <h2>Agencies & Organizations</h2>
          </div>
        </div>

        {/* Tab Filter */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '1.75rem',
          paddingBottom: '1.25rem',
          borderBottom: '1px solid var(--cp-card-border, #e2e8f0)',
        }}>
          {LEVELS.map(level => (
            <TabPill
              key={level}
              label={level}
              count={counts[level] || 0}
              active={activeTab === level}
              onClick={() => setActiveTab(level)}
            />
          ))}
        </div>

        {/* Agency Cards */}
        {!showCivicGroups && (
          <div className="grid-2">
            {filteredAgencies.map(a => <AgencyCard key={a.id} agency={a} />)}
          </div>
        )}

        {/* Civic Group Cards */}
        {showCivicGroups && (
          <div className="grid-2">
            {civicGroups.map(g => <CivicGroupCard key={g.id} group={g} />)}
          </div>
        )}
      </div>
    </section>
  );
}
