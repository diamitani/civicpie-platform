import { Sparkles, Star } from 'lucide-react';

export default function CommunitySection({ highlights }) {
  return (
    <section id="community" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><Sparkles size={18} /></div>
            <h2>Community Spotlight</h2>
          </div>
        </div>
        <div className="grid-3">
          {highlights.map((group, i) => (
            <div key={i} className="glass-card community-card">
              <h4 style={{ fontSize: '0.9375rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: 8 }}>
                <Star size={16} style={{ color: 'var(--cp-amber)' }} />
                {group.category}
              </h4>
              <ul className="community-list">
                {group.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>

              <style>{`
                .community-card { padding: 1.5rem; }
                .community-list {
                  list-style: none; padding: 0;
                  display: flex; flex-direction: column; gap: 0.5rem;
                }
                .community-list li {
                  font-size: 0.8125rem; color: var(--cp-gray-700);
                  padding: 0.5rem 0.75rem;
                  border-radius: var(--radius-sm);
                  background: var(--cp-gray-50);
                  border-left: 2px solid var(--cp-amber);
                  transition: background 150ms;
                }
                .community-list li:hover { background: var(--cp-gray-100); }
              `}</style>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
