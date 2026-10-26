import { useParams, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookmark, selectIsBookmarked } from '../store/slices/bookmarksSlice';
import { careerData } from '../data/careerData';
import SimulatorDashboard from '../components/simulator/SimulatorDashboard';

function SimulatorPage() {
  const { careerId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const career = careerData.find(c => c.id === careerId);
  const isBookmarked = useSelector(selectIsBookmarked(careerId));

  if (!career) {
    return (
      <div style={{
        paddingTop: 'calc(var(--navbar-height) + 60px)',
        paddingBottom: '80px',
        textAlign: 'center',
        minHeight: '70vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <span style={{ fontSize: '3.5rem' }}>🧭</span>
        <h1 style={{ marginTop: '16px', color: 'var(--text-primary)' }}>Career Track Not Found</h1>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', margin: '8px auto 24px auto' }}>
          We could not locate a simulation for &ldquo;{careerId}&rdquo;. Please check the URL or select from our available career paths.
        </p>
        <Link
          to="/careers"
          className="hero-cta-primary"
          style={{ textDecoration: 'none' }}
        >
          ← Return to All Careers
        </Link>
      </div>
    );
  }

  return (
    <div className="simulator-page" style={{ paddingTop: 'calc(var(--navbar-height) + 24px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Navigation Breadcrumb / Back button */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <button
            onClick={() => navigate('/careers')}
            style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 18px',
              cursor: 'pointer',
              fontWeight: 500,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            ← Back to Careers
          </button>

          {/* Redux Bookmark button */}
          <button
            onClick={() => dispatch(toggleBookmark(career))}
            style={{
              background: isBookmarked ? 'rgba(239, 68, 68, 0.1)' : 'var(--bg-tertiary)',
              border: '1px solid',
              borderColor: isBookmarked ? '#EF4444' : 'var(--border-color)',
              color: isBookmarked ? '#EF4444' : 'var(--text-secondary)',
              borderRadius: 'var(--radius-full)',
              padding: '8px 18px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.88rem',
              display: 'flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            {isBookmarked ? '❤️ Saved in Redux' : '🤍 Bookmark Career'}
          </button>
        </div>

        {/* Career Header Banner */}
        <div style={{
          background: 'var(--bg-secondary)',
          border: '1px solid var(--border-color)',
          borderRadius: 'var(--radius-lg)',
          padding: '32px',
          marginBottom: '32px',
          boxShadow: 'var(--shadow-md)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '4px',
            background: career.gradient
          }} />

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <div style={{
              fontSize: '3rem',
              background: 'var(--bg-tertiary)',
              width: '80px',
              height: '80px',
              borderRadius: 'var(--radius-md)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              {career.icon}
            </div>

            <div style={{ flex: 1, minWidth: '260px' }}>
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 600,
                color: career.color,
                textTransform: 'uppercase',
                letterSpacing: '1px'
              }}>
                Interactive Simulator
              </span>
              <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)', margin: '4px 0 8px 0', color: 'var(--text-primary)' }}>
                {career.title}
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', margin: 0 }}>
                {career.tagline}
              </p>
            </div>

            {/* Quick Action Links */}
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              <Link
                to={`/mentor?career=${career.id}`}
                style={{
                  background: 'var(--bg-tertiary)',
                  color: 'var(--text-primary)',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  border: '1px solid var(--border-color)'
                }}
              >
                🧠 Ask Mentor
              </Link>
              <Link
                to={`/resume?career=${career.id}`}
                style={{
                  background: career.gradient,
                  color: 'white',
                  padding: '10px 18px',
                  borderRadius: 'var(--radius-md)',
                  textDecoration: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 600
                }}
              >
                📄 Scan Resume
              </Link>
            </div>
          </div>
        </div>

        {/* 7-Tab Simulator Dashboard */}
        <SimulatorDashboard career={career} />
      </div>
    </div>
  );
}

export default SimulatorPage;
