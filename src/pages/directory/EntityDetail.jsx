import React, { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Globe, Phone, ExternalLink, Calendar, Info, Share2, Heart } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { directoryGroups } from '../../data/illinois/chicago/48thward/directoryData';
import { districtMeta } from '../../data/illinois/chicago/48thward/wardData';

export default function EntityDetail() {
  const { entityId } = useParams();
  const navigate = useNavigate();

  const entity = useMemo(() => {
    const all = Object.values(directoryGroups).flat();
    return all.find(e => e.id === entityId);
  }, [entityId]);

  if (!entity) {
    return (
      <div className="detail-page">
        <Navbar districtName={districtMeta.name} stateName={districtMeta.state} />
        <main className="container section text-center">
          <h2>Entity not found</h2>
          <Link to="/directory" className="btn btn-primary mt-4">Back to Directory</Link>
        </main>
        <Footer districtMeta={districtMeta} />
      </div>
    );
  }

  return (
    <div className="detail-page">
      <Navbar districtName={districtMeta.name} stateName={districtMeta.state} />
      
      <main className="detail-container container">
        <div className="detail-nav">
          <button onClick={() => navigate(-1)} className="back-btn">
            <ArrowLeft size={18} /> Back
          </button>
          <div className="detail-actions">
            <button className="action-icon"><Share2 size={18} /></button>
            <button className="action-icon"><Heart size={18} /></button>
          </div>
        </div>

        <div className="detail-grid">
          {/* Main Content */}
          <div className="detail-main">
            <div className="entity-header glass-card">
              <span className="entity-tag">{entity.category}</span>
              <h1 className="entity-title">{entity.name}</h1>
              {entity.neighborhood && <p className="entity-neighborhood">{entity.neighborhood}</p>}
              
              <div className="quick-info">
                <div className="info-item">
                  <MapPin size={20} />
                  <span>{entity.address || 'Address on file'}</span>
                </div>
                {entity.phone && (
                  <div className="info-item">
                    <Phone size={20} />
                    <span>{entity.phone}</span>
                  </div>
                )}
                {entity.website && (
                  <div className="info-item">
                    <Globe size={20} />
                    <a href={entity.website} target="_blank" rel="noopener noreferrer">
                      Visit Website <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>

            <div className="entity-section glass-card">
              <h2 className="section-title"><Info size={20} /> About this Institution</h2>
              <p className="section-text">
                This {entity.category.toLowerCase()} is an integral part of the {entity.neighborhood || '48th Ward'} community. 
                Our platform provides verified data to help residents connect with local services, organizations, and businesses.
              </p>
              <div className="verified-badge">
                <div className="badge-dot" /> Verified Data Platform Source
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            <div className="action-card glass-card">
              <h3 className="card-title">Community Resource</h3>
              <p className="card-text">Is this your organization? Contact the 48th Ward office to update your verified listing.</p>
              <a href="mailto:info@the48thward.org" className="btn btn-secondary w-100">Update Listing</a>
            </div>

            <div className="related-card glass-card">
              <h3 className="card-title">Local Context</h3>
              <ul className="context-list">
                <li><Calendar size={14} /> Active Resident Services</li>
                <li><MapPin size={14} /> 48th Ward, Chicago</li>
                <li><Users size={14} /> Local Civic Data</li>
              </ul>
            </div>
          </aside>
        </div>
      </main>

      <Footer districtMeta={districtMeta} />

      <style>{`
        .detail-page {
          background: #f8fafc;
          min-height: 100vh;
        }
        .detail-container {
          padding-top: 1.5rem;
          padding-bottom: 5rem;
        }
        .detail-nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }
        .back-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          background: none;
          border: none;
          color: var(--cp-gray-600);
          font-weight: 600;
          cursor: pointer;
          font-size: 0.9375rem;
        }
        .detail-actions {
          display: flex;
          gap: 0.75rem;
        }
        .action-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid var(--cp-card-border);
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--cp-gray-600);
          cursor: pointer;
        }

        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 320px;
          gap: 2rem;
        }
        
        .entity-header {
          padding: 2.5rem;
          margin-bottom: 2rem;
          background: white;
        }
        .entity-tag {
          display: inline-block;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--cp-blue);
          background: rgba(0, 153, 216, 0.08);
          padding: 0.25rem 0.75rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
        }
        .entity-title {
          font-family: var(--font-display);
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--cp-gray-900);
          margin-bottom: 0.5rem;
        }
        .entity-neighborhood {
          font-size: 1.125rem;
          color: var(--cp-gray-500);
          margin-bottom: 2.5rem;
        }
        .quick-info {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }
        .info-item {
          display: flex;
          align-items: center;
          gap: 12px;
          color: var(--cp-gray-700);
          font-size: 1rem;
        }
        .info-item a {
          color: var(--cp-blue);
          text-decoration: none;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .entity-section {
          padding: 2rem;
          background: white;
        }
        .entity-section .section-title {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }
        .section-text {
          color: var(--cp-gray-600);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .verified-badge {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.8125rem;
          color: var(--cp-gray-400);
          font-weight: 500;
        }
        .badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #10b981;
        }

        /* Sidebar Cards */
        .action-card, .related-card {
          padding: 1.5rem;
          background: white;
          margin-bottom: 1.5rem;
        }
        .card-title {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
        }
        .card-text {
          font-size: 0.875rem;
          color: var(--cp-gray-500);
          margin-bottom: 1.5rem;
        }
        .context-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }
        .context-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 0.875rem;
          color: var(--cp-gray-600);
        }

        @media (max-width: 900px) {
          .detail-grid { grid-template-columns: 1fr; }
          .detail-sidebar { order: -1; }
        }
        @media (max-width: 600px) {
          .entity-title { font-size: 1.75rem; }
        }
      `}</style>
    </div>
  );
}
