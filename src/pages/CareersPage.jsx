import { useState, useMemo } from 'react';
import { careerData } from '../data/careerData';
import CareerCard from '../components/careers/CareerCard';
import '../styles/CareerSelection.css';

function CareersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Filter categories
  const categories = ['All', 'Development', 'Data & AI', 'Cloud & Security', 'Design'];

  // Category mapping
  const getCategoryForCareer = (id) => {
    switch (id) {
      case 'software-engineer':
      case 'mobile-app-developer':
        return 'Development';
      case 'data-scientist':
        return 'Data & AI';
      case 'cloud-architect':
      case 'cybersecurity-analyst':
        return 'Cloud & Security';
      case 'ux-ui-designer':
        return 'Design';
      default:
        return 'Development';
    }
  };

  // Filtered careers calculation
  const filteredCareers = useMemo(() => {
    return careerData.filter((career) => {
      // 1. Category filter
      const matchesCategory =
        selectedCategory === 'All' || getCategoryForCareer(career.id) === selectedCategory;

      // 2. Search query filter (matches title, tagline, or skills)
      const query = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !query ||
        career.title.toLowerCase().includes(query) ||
        career.tagline.toLowerCase().includes(query) ||
        career.skills.some(s => s.name.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="careers-page" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--accent-primary)',
            background: 'rgba(108, 99, 255, 0.1)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)'
          }}>
            Explore Career Tracks
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginTop: '16px',
            marginBottom: '12px',
            color: 'var(--text-primary)'
          }}>
            Find Your Dream <span className="gradient-text">Tech Career</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Choose any career path below to step into its complete interactive simulator — skills roadmap, salary growth, daily timeline, and interview prep.
          </p>
        </div>

        {/* Search and Filter Controls */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
          marginBottom: '40px'
        }}>
          {/* Search Bar */}
          <div style={{ position: 'relative', width: '100%', maxWidth: '520px' }}>
            <span style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              fontSize: '1.1rem',
              color: 'var(--text-muted)'
            }}>
              🔍
            </span>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by career title, role, or skill (e.g. React, Python)..."
              style={{
                width: '100%',
                padding: '14px 44px 14px 46px',
                borderRadius: 'var(--radius-full)',
                border: '1px solid var(--border-color)',
                background: 'var(--bg-secondary)',
                color: 'var(--text-primary)',
                fontSize: '0.95rem',
                outline: 'none',
                boxShadow: 'var(--shadow-sm)'
              }}
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: 'var(--text-muted)',
                  fontSize: '1.1rem'
                }}
              >
                &times;
              </button>
            )}
          </div>

          {/* Filter Chips */}
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--border-color)',
                  background: selectedCategory === cat ? 'var(--accent-primary)' : 'var(--bg-secondary)',
                  color: selectedCategory === cat ? 'white' : 'var(--text-secondary)',
                  fontWeight: 500,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Showing <strong>{filteredCareers.length}</strong> of {careerData.length} careers
        </div>

        {/* Careers Grid */}
        {filteredCareers.length === 0 ? (
          <div style={{
            textAlign: 'center',
            padding: '60px 20px',
            background: 'var(--bg-secondary)',
            borderRadius: 'var(--radius-lg)',
            border: '1px dashed var(--border-color)'
          }}>
            <span style={{ fontSize: '2.5rem' }}>🔎</span>
            <h3 style={{ marginTop: '12px', color: 'var(--text-primary)' }}>No careers matched your search</h3>
            <p style={{ color: 'var(--text-secondary)', marginTop: '6px' }}>Try searching for a different skill or clear your filters.</p>
            <button
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              style={{
                marginTop: '16px',
                padding: '8px 20px',
                background: 'var(--accent-gradient)',
                color: 'white',
                border: 'none',
                borderRadius: 'var(--radius-full)',
                cursor: 'pointer',
                fontWeight: 600
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="career-grid" style={{ padding: 0 }}>
            {filteredCareers.map((career) => (
              <CareerCard key={career.id} career={career} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default CareersPage;
