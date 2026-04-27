import { ScrollText, ExternalLink, CheckCircle, Clock, AlertCircle } from 'lucide-react';

const statusConfig = {
  'Approved': { icon: CheckCircle, color: 'var(--cp-green)', badge: 'badge-green' },
  'In Progress': { icon: Clock, color: 'var(--cp-amber)', badge: 'badge-amber' },
  'Active': { icon: AlertCircle, color: 'var(--cp-blue-light)', badge: 'badge-blue' },
};

function LegislationCard({ item }) {
  const config = statusConfig[item.status] || statusConfig['Active'];
  const Icon = config.icon;

  return (
    <div className="glass-card leg-card">
      <div className="leg-top">
        <span className={`badge ${config.badge}`}>
          <Icon size={11} style={{ marginRight: 4 }} /> {item.status}
        </span>
        <span className="badge badge-blue" style={{ opacity: 0.6 }}>{item.level}</span>
      </div>
      <h4 style={{ margin: '0.75rem 0 0.5rem', fontSize: '0.9375rem' }}>{item.title}</h4>
      <p style={{ fontSize: '0.8125rem', marginBottom: '0.5rem' }}>{item.summary}</p>
      {item.impact && (
        <p style={{ fontSize: '0.75rem', color: 'var(--cp-teal)', marginBottom: '0.75rem' }}>
          Impact: {item.impact}
        </p>
      )}
      <div className="leg-bottom">
        <span style={{ fontSize: '0.6875rem', color: 'var(--cp-gray-500)' }}>
          {new Date(item.date + 'T00:00:00').toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
        </span>
        {item.link && (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ fontSize: '0.6875rem', padding: '0.25rem 0.5rem' }}>
            Details <ExternalLink size={11} />
          </a>
        )}
      </div>
      {item.tags && (
        <div className="leg-tags">
          {item.tags.map((t, i) => <span key={i} className="leg-tag">{t}</span>)}
        </div>
      )}

      <style>{`
        .leg-card { padding: 1.25rem; display: flex; flex-direction: column; }
        .leg-top { display: flex; gap: 0.375rem; flex-wrap: wrap; }
        .leg-bottom { display: flex; align-items: center; justify-content: space-between; }
        .leg-tags { display: flex; flex-wrap: wrap; gap: 0.25rem; margin-top: 0.75rem; }
        .leg-tag {
          padding: 0.125rem 0.5rem; border-radius: var(--radius-full);
          font-size: 0.625rem; color: var(--cp-gray-600);
          background: var(--cp-gray-100);
        }
      `}</style>
    </div>
  );
}

export default function LegislationSection({ legislation }) {
  return (
    <section id="legislation" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><ScrollText size={18} /></div>
            <h2>Legislation & Projects</h2>
          </div>
        </div>
        <div className="grid-2">
          {legislation.map(l => <LegislationCard key={l.id} item={l} />)}
        </div>
      </div>
    </section>
  );
}
