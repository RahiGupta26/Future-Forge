import { useState, useEffect, useCallback } from 'react';

function LiveTechTrends({ career }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  // Map career to Dev.to tags
  const getTagForCareer = (id) => {
    switch (id) {
      case 'software-engineer':
        return 'javascript';
      case 'data-scientist':
        return 'datascience';
      case 'cloud-architect':
        return 'devops';
      case 'cybersecurity-analyst':
        return 'security';
      case 'ux-ui-designer':
        return 'design';
      case 'mobile-app-developer':
        return 'mobile';
      default:
        return 'career';
    }
  };

  const currentTag = getTagForCareer(career?.id);

  // Debounce implementation (Syllabus Lecture 67-72)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
      setPage(1); // Reset to page 1 on new search
    }, 400); // 400ms debounce
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Consuming Dev.to REST API
  const fetchArticles = useCallback(async (pageNum, isLoadMore = false) => {
    setLoading(true);
    setError(null);

    try {
      // Build API query URL
      let url = `https://dev.to/api/articles?tag=${currentTag}&page=${pageNum}&per_page=6`;
      const res = await fetch(url);

      if (!res.ok) {
        throw new Error(`API error: ${res.statusText} (${res.status})`);
      }

      const data = await res.json();

      if (data.length < 6) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }

      if (isLoadMore) {
        setArticles(prev => [...prev, ...data]);
      } else {
        setArticles(data);
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch live industry articles. Please check connection.');
    } finally {
      setLoading(false);
    }
  }, [currentTag]);

  // Initial fetch on career or page change
  useEffect(() => {
    fetchArticles(1, false);
    setPage(1);
  }, [career, fetchArticles]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchArticles(nextPage, true);
  };

  // Filter client-side with debounced search
  const displayedArticles = articles.filter(a => {
    if (!debouncedSearch) return true;
    return (
      a.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      a.description.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  });

  return (
    <div className="live-tech-trends" style={{ animation: 'fadeInUp 0.4s ease' }}>
      {/* Header */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        flexWrap: 'wrap',
        gap: '16px',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--border-color)'
      }}>
        <div>
          <h2 style={{
            fontSize: '1.6rem',
            fontFamily: 'var(--font-display)',
            margin: '0 0 6px 0',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            🌐 Live Industry Trends & Tech News
          </h2>
          <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Real-time insights consumed from Dev.to REST API for modern <strong>#{currentTag}</strong> workflows.
          </p>
        </div>

        {/* Debounced Search Input */}
        <div style={{ position: 'relative', minWidth: '240px' }}>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Filter articles..."
            style={{
              padding: '8px 14px 8px 34px',
              borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-color)',
              background: 'var(--bg-secondary)',
              color: 'var(--text-primary)',
              fontSize: '0.88rem',
              outline: 'none',
              width: '100%'
            }}
          />
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.85rem' }}>
            🔍
          </span>
        </div>
      </div>

      {/* Error & Retry State */}
      {error && (
        <div style={{
          padding: '24px',
          background: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          borderRadius: 'var(--radius-md)',
          textAlign: 'center',
          color: '#EF4444',
          marginBottom: '24px'
        }}>
          <p style={{ margin: '0 0 12px 0', fontWeight: 500 }}>{error}</p>
          <button
            onClick={() => fetchArticles(page, false)}
            style={{
              padding: '8px 20px',
              background: '#EF4444',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            Retry Connection 🔄
          </button>
        </div>
      )}

      {/* Articles Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px'
      }}>
        {displayedArticles.map((article) => (
          <article
            key={article.id}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease'
            }}
          >
            {article.cover_image && (
              <img
                src={article.cover_image}
                alt={article.title}
                style={{
                  width: '100%',
                  height: '140px',
                  objectFit: 'cover',
                  borderRadius: 'var(--radius-sm)',
                  marginBottom: '14px'
                }}
              />
            )}

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <img
                src={article.user.profile_image_90}
                alt={article.user.name}
                style={{ width: '28px', height: '28px', borderRadius: '50%' }}
              />
              <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                {article.user.name}
              </span>
              <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                {article.reading_time_minutes} min read
              </span>
            </div>

            <h3 style={{
              fontSize: '1.05rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              margin: '0 0 10px 0',
              lineHeight: 1.4
            }}>
              {article.title}
            </h3>

            <p style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              lineHeight: 1.5,
              margin: '0 0 16px 0',
              flex: 1
            }}>
              {article.description}
            </p>

            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '12px',
              borderTop: '1px solid var(--border-color)',
              fontSize: '0.8rem'
            }}>
              <span style={{ color: 'var(--text-muted)' }}>
                💖 {article.positive_reactions_count} reactions
              </span>
              <a
                href={article.url}
                target="_blank"
                rel="noreferrer"
                style={{
                  color: 'var(--accent-primary)',
                  fontWeight: 600,
                  textDecoration: 'none'
                }}
              >
                Read Article →
              </a>
            </div>
          </article>
        ))}
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <div className="spinner" style={{ margin: '0 auto 12px auto' }}></div>
          <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
            Fetching latest {currentTag} industry dispatches...
          </span>
        </div>
      )}

      {/* Pagination / Load More Button */}
      {!loading && hasMore && articles.length > 0 && (
        <div style={{ textAlign: 'center', marginTop: '36px' }}>
          <button
            onClick={handleLoadMore}
            style={{
              padding: '10px 28px',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-full)',
              color: 'var(--text-primary)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
          >
            Load More Articles (Page {page + 1}) ↓
          </button>
        </div>
      )}
    </div>
  );
}

export default LiveTechTrends;
