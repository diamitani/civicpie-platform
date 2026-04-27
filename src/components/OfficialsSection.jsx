import { useState } from 'react';
import { User, Building, Phone, Mail, Globe, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const levelColors = {
  City: 'badge-blue',
  State: 'badge-purple',
  Federal: 'badge-teal',
};

function OfficialCard({ official }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="glass-card official-card">
      <div className="official-header" onClick={() => setExpanded(!expanded)} style={{ cursor: 'pointer' }}>
        <div className="official-avatar">
          <User size={24} />
        </div>
        <div className="official-info">
          <h4 style={{ margin: 0, fontSize: '1rem' }}>{official.name}</h4>
          <p style={{ margin: 0, fontSize: '0.8125rem', color: 'var(--cp-gray-600)' }}>{official.title}</p>
          <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem', flexWrap: 'wrap' }}>
            <span className={`badge ${levelColors[official.level] || 'badge-blue'}`}>{official.level}</span>
            {official.body && <span className="badge badge-blue" style={{ opacity: 0.7, fontSize: '0.65rem' }}>{official.body}</span>}
          </div>
        </div>
        <button className="expand-btn" aria-label="Expand">
          {expanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </button>
      </div>

      {expanded && (
        <div className="official-details">
          {official.bio && <p style={{ fontSize: '0.8125rem', marginBottom: '0.75rem' }}>{official.bio}</p>}

          {official.keyIssues && (
            <div className="detail-section">
              <h5>Key Issues</h5>
              <div className="tag-list">
                {official.keyIssues.map((issue, i) => (
                  <span key={i} className="issue-tag">{issue}</span>
                ))}
              </div>
            </div>
          )}

          {official.achievements && (
            <div className="detail-section">
              <h5>Achievements</h5>
              <ul className="achievement-list">
                {official.achievements.map((a, i) => <li key={i}>{a}</li>)}
              </ul>
            </div>
          )}

          {official.contact && (
            <div className="detail-section contact-links">
              {official.contact.phone && (
                <a href={`tel:${official.contact.phone}`} className="contact-link">
                  <Phone size={13} /> {official.contact.phone}
                </a>
              )}
              {official.contact.email && (
                <a href={`mailto:${official.contact.email}`} className="contact-link">
                  <Mail size={13} /> {official.contact.email}
                </a>
              )}
              {official.contact.website && (
                <a href={official.contact.website} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <Globe size={13} /> Website <ExternalLink size={11} />
                </a>
              )}
            </div>
          )}
        </div>
      )}

      <style>{`
        .official-card { padding: 1.25rem; }
        .official-header { display: flex; align-items: flex-start; gap: 1rem; }
        .official-avatar {
          width: 48px; height: 48px; border-radius: 12px;
          background: linear-gradient(135deg, var(--cp-blue-glow), rgba(8,185,236,0.15));
          display: flex; align-items: center; justify-content: center;
          color: var(--cp-blue-light); flex-shrink: 0;
        }
        .official-info { flex: 1; min-width: 0; }
        .expand-btn {
          background: none; border: none; color: var(--cp-gray-500);
          cursor: pointer; padding: 4px; flex-shrink: 0;
        }
        .official-details {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid var(--cp-card-border);
          animation: fadeIn 0.3s ease;
        }
        .detail-section { margin-bottom: 0.75rem; }
        .detail-section h5 {
          font-size: 0.6875rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: var(--cp-gray-500);
          margin-bottom: 0.5rem;
        }
        .tag-list { display: flex; flex-wrap: wrap; gap: 0.375rem; }
        .issue-tag {
          padding: 0.2rem 0.625rem;
          border-radius: var(--radius-full);
          font-size: 0.6875rem;
          font-weight: 500;
          background: var(--cp-gray-100);
          color: var(--cp-gray-700);
          border: 1px solid var(--cp-card-border);
        }
        .achievement-list {
          list-style: none; padding: 0;
          display: flex; flex-direction: column; gap: 0.375rem;
        }
        .achievement-list li {
          font-size: 0.8125rem; color: var(--cp-gray-700);
          padding-left: 1rem; position: relative;
        }
        .achievement-list li::before {
          content: '✓'; position: absolute; left: 0;
          color: var(--cp-green); font-weight: 700;
        }
        .contact-links { display: flex; gap: 0.75rem; flex-wrap: wrap; }
        .contact-link {
          display: flex; align-items: center; gap: 5px;
          font-size: 0.75rem; color: var(--cp-gray-600);
          padding: 0.3rem 0.625rem; border-radius: var(--radius-full);
          background: var(--cp-gray-50);
          border: 1px solid var(--cp-card-border);
          transition: all 150ms;
        }
        .contact-link:hover { color: var(--cp-gray-900); border-color: var(--cp-gray-300); }
      `}</style>
    </div>
  );
}

export default function OfficialsSection({ officials }) {
  const [filter, setFilter] = useState('All');
  const levels = ['All', 'City', 'State', 'Federal'];
  const filtered = filter === 'All' ? officials : officials.filter(o => o.level === filter);

  return (
    <section id="officials" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><User size={18} /></div>
            <h2>Your Officials</h2>
          </div>
          <div className="tab-nav">
            {levels.map(l => (
              <button key={l} className={`tab-btn ${filter === l ? 'active' : ''}`} onClick={() => setFilter(l)}>
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="grid-2">
          {filtered.map(o => <OfficialCard key={o.id} official={o} />)}
        </div>
      </div>
    </section>
  );
}
