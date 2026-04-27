import React, { useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Search, Filter, MapPin, Globe, Phone, ArrowLeft, ChevronRight, LayoutGrid, List as ListIcon } from 'lucide-react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { directoryGroups } from '../../data/illinois/chicago/48thward/directoryData';
import { districtMeta } from '../../data/illinois/chicago/48thward/wardData';

export default function WardDirectory() {
  const { category: activeCategory } = useParams();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState('grid'); // grid or list

  const categories = Object.keys(directoryGroups);
  const currentCategory = activeCategory || 'All';

  const allEntities = useMemo(() => {
    return Object.values(directoryGroups).flat();
  }, []);

  const filteredEntities = useMemo(() => {
    let base = currentCategory === 'All' ? allEntities : directoryGroups[currentCategory] || [];
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      base = base.filter(e => 
        e.name.toLowerCase().includes(q) || 
        e.category.toLowerCase().includes(q) ||
        (e.address && e.address.toLowerCase().includes(q))
      );
    }
    return base;
  }, [currentCategory, allEntities, searchQuery]);

  return (
    <div className="directory-page">
      <Navbar districtName={districtMeta.name} stateName={districtMeta.state} />
      
      <main className="directory-container container">
        {/* Sidebar */}
        <aside className="directory-sidebar">
          <div className="sidebar-header">
            <Link to="/illinois/chicago/48thward" className="back-link">
              <ArrowLeft size={16} /> Back to Hub
            </Link>
            <h1 className="sidebar-title">Community Directory</h1>
            <p className="sidebar-subtitle">48th Ward Civic Data</p>
          </div>

          <nav className="category-nav">
            <Link 
              to="/directory" 
              className={`category-item ${!activeCategory ? 'active' : ''}`}
            >
              <LayoutGrid size={18} />
              <span>All Categories</span>
              <span className="count">{allEntities.length}</span>
            </Link>
            
            {categories.map(cat => (
              <Link 
                key={cat}
                to={`/directory/${encodeURIComponent(cat)}`} 
                className={`category-item ${activeCategory === cat ? 'active' : ''}`}
              >
                <span>{cat}</span>
                <span className="count">{directoryGroups[cat].length}</span>
              </Link>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <section className="directory-content">
          {/* Header & Search */}
          <div className="content-header">
            <div className="search-bar-wrapper">
              <Search className="search-icon" size={20} />
              <input 
                type="text" 
                placeholder="Search organizations, schools, businesses..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
            </div>
            
            <div className="header-actions">
              <div className="view-toggle">
                <button 
                  className={`toggle-btn ${viewMode === 'grid' ? 'active' : ''}`}
                  onClick={() => setViewMode('grid')}
                >
                  <LayoutGrid size={18} />
                </button>
                <button 
                  className={`toggle-btn ${viewMode === 'list' ? 'active' : ''}`}
                  onClick={() => setViewMode('list')}
                >
                  <ListIcon size={18} />
                </button>
              </div>
            </div>
          </div>

          <div className="results-info">
            <h2>{currentCategory === 'All' ? 'Everywhere' : currentCategory}</h2>
            <p>{filteredEntities.length} results found</p>
          </div>

          {/* Grid / List */}
          <div className={`entities-${viewMode}`}>
            {filteredEntities.map((entity, idx) => (
              <Link 
                to={`/directory/item/${entity.id}`} 
                key={entity.id} 
                className="entity-card glass-card animate-in"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <div className="entity-info">
                  <div className="entity-type-tag">
                    <span className="dot" />
                    {entity.category}
                  </div>
                  <h3 className="entity-name">{entity.name}</h3>
                  <p className="entity-address">
                    <MapPin size={14} /> {entity.address || 'Location on file'}
                  </p>
                </div>
                
                <div className="entity-footer">
                  <div className="entity-links">
                    {entity.website && <Globe size={16} className="active-icon" />}
                    {entity.phone && <Phone size={16} className="active-icon" />}
                  </div>
                  <ChevronRight size={18} className="arrow-icon" />
                </div>
              </Link>
            ))}
          </div>

          {filteredEntities.length === 0 && (
            <div className="no-results">
              <Search size={48} />
              <h3>No matches found</h3>
              <p>Try adjusting your search or category filter.</p>
            </div>
          )}
        </section>
      </main>

      <Footer districtMeta={districtMeta} />

      <style>{`
        .directory-page {
          background: #f8fafc;
          min-height: 100vh;
        }
        .directory-container {
          display: grid;
          grid-template-columns: 280px 1fr;
          gap: 2.5rem;
          padding-top: 2rem;
          padding-bottom: 5rem;
        }
        
        /* Sidebar */
        .directory-sidebar {
          position: sticky;
          top: 84px;
          height: calc(100vh - 120px);
          overflow-y: auto;
        }
        .back-link {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.8125rem;
          color: var(--cp-blue);
          text-decoration: none;
          font-weight: 600;
          margin-bottom: 1.5rem;
        }
        .sidebar-title {
          font-family: var(--font-display);
          font-size: 1.5rem;
          font-weight: 800;
          color: var(--cp-gray-900);
          margin-bottom: 0.25rem;
        }
        .sidebar-subtitle {
          font-size: 0.75rem;
          color: var(--cp-gray-500);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
          margin-bottom: 2rem;
        }
        .category-nav {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .category-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          color: var(--cp-gray-600);
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
          gap: 12px;
        }
        .category-item:hover {
          background: rgba(0, 153, 216, 0.05);
          color: var(--cp-blue);
        }
        .category-item.active {
          background: var(--cp-blue);
          color: white;
        }
        .category-item .count {
          font-size: 0.75rem;
          opacity: 0.7;
          background: rgba(0,0,0,0.05);
          padding: 2px 8px;
          border-radius: 999px;
        }
        .category-item.active .count {
          background: rgba(255,255,255,0.2);
        }

        /* Content */
        .content-header {
          display: flex;
          gap: 1rem;
          align-items: center;
          margin-bottom: 2rem;
        }
        .search-bar-wrapper {
          position: relative;
          flex: 1;
        }
        .search-icon {
          position: absolute;
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          color: var(--cp-gray-400);
        }
        .search-input {
          width: 100%;
          padding: 0.875rem 1rem 0.875rem 3rem;
          border-radius: 16px;
          border: 1px solid var(--cp-card-border);
          background: white;
          font-size: 0.9375rem;
          transition: all 0.2s;
          box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);
        }
        .search-input:focus {
          outline: none;
          border-color: var(--cp-blue);
          box-shadow: 0 0 0 4px rgba(0, 153, 216, 0.1);
        }
        .view-toggle {
          display: flex;
          background: white;
          border: 1px solid var(--cp-card-border);
          border-radius: 12px;
          padding: 4px;
        }
        .toggle-btn {
          padding: 6px;
          border: none;
          background: none;
          color: var(--cp-gray-400);
          border-radius: 8px;
          cursor: pointer;
        }
        .toggle-btn.active {
          background: var(--cp-gray-100);
          color: var(--cp-gray-900);
        }

        .results-info {
          margin-bottom: 1.5rem;
        }
        .results-info h2 {
          font-size: 1.25rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }
        .results-info p {
          font-size: 0.875rem;
          color: var(--cp-gray-500);
        }

        /* Entity Cards */
        .entities-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1.5rem;
        }
        .entity-card {
          padding: 1.5rem;
          text-decoration: none;
          color: inherit;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 180px;
          background: white;
          border: 1px solid var(--cp-card-border);
          transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
        }
        .entity-card:hover {
          transform: translateY(-4px);
          border-color: var(--cp-blue);
          box-shadow: 0 12px 20px -8px rgba(0,0,0,0.1);
        }
        .entity-type-tag {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: var(--cp-gray-500);
          margin-bottom: 0.75rem;
        }
        .entity-type-tag .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--cp-blue);
        }
        .entity-name {
          font-size: 1.125rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--cp-gray-900);
        }
        .entity-address {
          font-size: 0.8125rem;
          color: var(--cp-gray-500);
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .entity-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgba(0,0,0,0.03);
        }
        .entity-links {
          display: flex;
          gap: 10px;
          color: var(--cp-gray-300);
        }
        .active-icon { color: var(--cp-blue); opacity: 0.6; }
        .arrow-icon { color: var(--cp-gray-300); transition: transform 0.2s; }
        .entity-card:hover .arrow-icon { transform: translateX(4px); color: var(--cp-blue); }

        .no-results {
          padding: 5rem 0;
          text-align: center;
          color: var(--cp-gray-400);
        }
        .no-results h3 { margin: 1rem 0 0.5rem; color: var(--cp-gray-900); }

        @media (max-width: 768px) {
          .directory-container { grid-template-columns: 1fr; }
          .directory-sidebar { position: static; height: auto; margin-bottom: 2rem; }
          .category-nav { flex-direction: row; overflow-x: auto; padding-bottom: 1rem; gap: 0.5rem; }
          .category-item { flex-shrink: 0; padding: 0.5rem 1rem; }
          .category-item .count { display: none; }
        }
      `}</style>
    </div>
  );
}
