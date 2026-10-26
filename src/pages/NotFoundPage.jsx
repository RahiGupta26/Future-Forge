import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <div style={{
      minHeight: '75vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '24px'
    }}>
      <span style={{ fontSize: '4.5rem' }}>🌌</span>
      <h1 style={{ fontSize: '3rem', margin: '16px 0 8px 0', color: 'var(--text-primary)' }}>
        404 — Page Not Found
      </h1>
      <p style={{ color: 'var(--text-secondary)', maxWidth: '440px', marginBottom: '28px', fontSize: '1.1rem' }}>
        The path you are looking for does not exist in the Future Forge career cosmos.
      </p>
      <Link
        to="/"
        className="hero-cta-primary"
        style={{ textDecoration: 'none' }}
      >
        ← Back to Safety (Home)
      </Link>
    </div>
  );
}

export default NotFoundPage;
