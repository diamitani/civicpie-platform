import React from 'react';

export default function BusinessDirectory({ businesses }) {
  if (!businesses || businesses.length === 0) return null;

  return (
    <section id="directory" className="section" style={{ background: 'var(--cp-bg-alt)' }}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Ward Inventory</span>
          <h2 className="section-title">Local Business Directory</h2>
          <p className="section-subtitle">
            A real-time index of the 48th Ward's unique commercial landscape, directly from the master inventory.
          </p>
        </div>

        <div className="directory-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.25rem',
          marginTop: '2rem'
        }}>
          {businesses.map((biz, idx) => (
            <div key={idx} className="glass-card business-card" style={{
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <span style={{
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  color: 'var(--cp-blue)',
                  background: 'rgba(0, 153, 216, 0.08)',
                  padding: '0.2rem 0.5rem',
                  borderRadius: '4px',
                  display: 'inline-block',
                  marginBottom: '0.75rem'
                }}>
                  {biz.category}
                </span>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.4rem' }}>{biz.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--cp-text-dim)', marginBottom: '1rem' }}>
                  {biz.address}
                </p>
              </div>
              
              {biz.website && (
                <a 
                  href={biz.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ fontSize: '0.75rem', padding: '0.5rem 0.75rem', width: 'fit-content' }}
                >
                  Visit Website
                </a>
              )}
            </div>
          ))}
        </div>

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--cp-text-dim)' }}>
            Total Businesses Indexed: <strong>982</strong> | Inventory Updated: April 2026
          </p>
        </div>
      </div>
    </section>
  );
}
