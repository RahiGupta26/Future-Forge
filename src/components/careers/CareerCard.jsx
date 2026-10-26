import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleBookmark, selectIsBookmarked } from '../../store/slices/bookmarksSlice';

function CareerCard({ career }) {
  const dispatch = useDispatch();
  const isBookmarked = useSelector(selectIsBookmarked(career.id));

  const handleBookmarkClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Prevent navigating when clicking heart icon
    dispatch(toggleBookmark(career));
  };

  return (
    <article
      className="career-card"
      style={{ '--career-color': career.color, position: 'relative' }}
    >
      {/* Redux Bookmark Toggle Button */}
      <button
        type="button"
        onClick={handleBookmarkClick}
        aria-label={isBookmarked ? 'Remove from saved' : 'Save career'}
        title={isBookmarked ? 'Remove from saved careers' : 'Save this career'}
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          background: 'var(--bg-tertiary)',
          border: '1px solid var(--border-color)',
          borderRadius: '50%',
          width: '36px',
          height: '36px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          fontSize: '1.1rem',
          zIndex: 2,
          transition: 'transform 0.2s ease, border-color 0.2s ease'
        }}
      >
        {isBookmarked ? '❤️' : '🤍'}
      </button>

      <div
        className="career-card-icon"
        role="img"
        aria-label={career.title}
      >
        {career.icon}
      </div>

      <h3 className="career-card-title">{career.title}</h3>
      <p className="career-card-tagline">{career.tagline}</p>

      {/* Skills preview tags */}
      {career.skills && (
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '20px' }}>
          {career.skills.slice(0, 3).map((s, idx) => (
            <span
              key={idx}
              style={{
                fontSize: '0.75rem',
                background: 'var(--bg-tertiary)',
                color: 'var(--text-secondary)',
                padding: '3px 8px',
                borderRadius: 'var(--radius-sm)',
                fontWeight: 500
              }}
            >
              {s.name}
            </span>
          ))}
          {career.skills.length > 3 && (
            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', alignSelf: 'center' }}>
              +{career.skills.length - 3} more
            </span>
          )}
        </div>
      )}

      {/* Router Link to dedicated /careers/:id */}
      <Link
        to={`/careers/${career.id}`}
        className="career-card-cta"
        style={{ background: career.gradient, textDecoration: 'none' }}
      >
        Start Simulation
        <span className="career-card-cta-arrow">→</span>
      </Link>
    </article>
  );
}

export default CareerCard;
