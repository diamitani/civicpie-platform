import { Heart, ExternalLink, ArrowRight } from 'lucide-react';

function BenefitCard({ benefit }) {
  return (
    <div className="glass-card benefit-card">
      <span className="badge badge-teal" style={{ alignSelf: 'flex-start' }}>{benefit.category}</span>
      <h4 style={{ margin: '0.75rem 0 0.5rem', fontSize: '0.9375rem' }}>{benefit.title}</h4>
      <p style={{ fontSize: '0.8125rem', marginBottom: '0.5rem', flex: 1 }}>{benefit.description}</p>
      <div className="benefit-info">
        <div className="benefit-row">
          <span className="benefit-label">Eligibility</span>
          <span className="benefit-value">{benefit.eligibility}</span>
        </div>
        <div className="benefit-row">
          <span className="benefit-label">How to Apply</span>
          <span className="benefit-value">{benefit.howToApply}</span>
        </div>
      </div>
      {benefit.link && (
        <a href={benefit.link} target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ marginTop: '0.75rem', fontSize: '0.75rem', alignSelf: 'flex-start' }}>
          Apply / Learn More <ExternalLink size={12} />
        </a>
      )}

      <style>{`
        .benefit-card { padding: 1.25rem; display: flex; flex-direction: column; }
        .benefit-info {
          display: flex; flex-direction: column; gap: 0.375rem;
          padding: 0.75rem; border-radius: var(--radius-sm);
          background: var(--cp-gray-50);
        }
        .benefit-row { display: flex; flex-direction: column; gap: 2px; }
        .benefit-label { font-size: 0.625rem; text-transform: uppercase; letter-spacing: 0.08em; color: var(--cp-gray-500); }
        .benefit-value { font-size: 0.75rem; color: var(--cp-gray-700); }
      `}</style>
    </div>
  );
}

export default function BenefitsSection({ benefits }) {
  return (
    <section id="benefits" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-title">
            <div className="icon"><Heart size={18} /></div>
            <h2>Benefits & Resources</h2>
          </div>
        </div>
        <div className="grid-3">
          {benefits.map(b => <BenefitCard key={b.id} benefit={b} />)}
        </div>
      </div>
    </section>
  );
}
