import { MapPin, Users, Vote, ArrowRight, ExternalLink, Map } from 'lucide-react';

export default function HeroSection({ district, stats }) {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="hero-content animate-in">
          <div className="hero-breadcrumb">
            <span>Civic Pie</span>
            <span className="bc-sep">/</span>
            <span>{district.state}</span>
            <span className="bc-sep">/</span>
            <span>{district.city}</span>
            <span className="bc-sep">/</span>
            <span>{district.name}</span>
          </div>

          <h1 className="hero-title">
            Your Civic Hub for the<br />
            <span className="gradient-text">{district.name}</span>
          </h1>

          <p className="hero-desc">{district.description}</p>

          <div className="hero-meta">
            <span className="hero-meta-item">
              <MapPin size={14} /> {district.neighborhoods.join(', ')}
            </span>
            <span className="hero-meta-item">
              <Users size={14} /> {district.population} residents
            </span>
          </div>

          <div className="hero-actions">
            <a href="https://ova.elections.il.gov/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              <Vote size={16} /> Register to Vote
            </a>
            <a href={district.boundaries.mapUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
              <Map size={16} /> View Ward Map
            </a>
            <a href="#officials" className="btn btn-secondary">
              Meet Your Officials <ArrowRight size={14} />
            </a>
            <a href={district.wardOffice.website} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              Ward Office <ExternalLink size={14} />
            </a>
          </div>
        </div>

        <div className="hero-stats animate-in animate-in-delay-2">
          {stats.map((s, i) => (
            <div key={i} className="stat-card glass-card">
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .hero-section { padding: 4rem 0 2rem; }
        .hero-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.75rem;
          color: var(--cp-gray-500);
          margin-bottom: 1.5rem;
          font-weight: 500;
        }
        .bc-sep { color: var(--cp-gray-400); }
        .bc-active { color: var(--cp-blue-light); }
        .hero-title { margin-bottom: 1.25rem; }
        .gradient-text {
          background: linear-gradient(135deg, var(--cp-blue-light), var(--cp-cyan));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-desc {
          max-width: 640px;
          font-size: 1.0625rem;
          line-height: 1.7;
          margin-bottom: 1rem;
        }
        .hero-meta {
          display: flex;
          gap: 1.5rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }
        .hero-meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: var(--cp-gray-400);
        }
        .hero-actions {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
          margin-bottom: 2rem;
        }
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 0.75rem;
        }
        .stat-card {
          padding: 1.25rem;
          text-align: center;
        }
        .stat-value {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--cp-gray-900);
        }
        .stat-label {
          font-size: 0.75rem;
          color: var(--cp-gray-500);
          margin-top: 2px;
        }
        @media (max-width: 768px) {
          .hero-section { padding: 2rem 0 1rem; }
          .hero-stats { grid-template-columns: repeat(3, 1fr); }
        }
        @media (max-width: 480px) {
          .hero-stats { grid-template-columns: repeat(2, 1fr); }
        }
      `}</style>
    </section>
  );
}
