import { useState, useEffect } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectBookmarks, selectBookmarksCount, removeBookmark } from '../../store/slices/bookmarksSlice';
import { useAuth } from '../../context/AuthContext';
import ThemeToggle from './ThemeToggle';
import '../../styles/Navbar.css';

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [showBookmarksModal, setShowBookmarksModal] = useState(false);

  const { user, isAuthenticated, logout } = useAuth();
  const bookmarks = useSelector(selectBookmarks);
  const bookmarksCount = useSelector(selectBookmarksCount);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const closeMobile = () => setIsMobileOpen(false);

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          {/* Logo link to Home */}
          <Link to="/" className="navbar-logo" onClick={closeMobile}>
            <span className="navbar-logo-icon">⚡</span>
            <span className="navbar-logo-text">Future Forge</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="navbar-links">
            <NavLink
              to="/"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Home
            </NavLink>
            <NavLink
              to="/careers"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Careers
            </NavLink>
            <NavLink
              to="/mentor"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              AI Mentor
            </NavLink>
            <NavLink
              to="/resume"
              className={({ isActive }) => `navbar-link ${isActive ? 'active' : ''}`}
            >
              Resume Analyzer
            </NavLink>
          </div>

          {/* Right Action Icons: Redux Bookmarks, Theme Toggle, Auth */}
          <div className="navbar-actions">
            {/* Redux Bookmarks Button */}
            <div className="bookmarks-dropdown-wrapper">
              <button
                className="navbar-bookmark-btn"
                onClick={() => setShowBookmarksModal(prev => !prev)}
                title="Saved Careers (Redux)"
                aria-label="View saved careers"
              >
                ❤️
                {bookmarksCount > 0 && (
                  <span className="bookmark-badge">{bookmarksCount}</span>
                )}
              </button>

              {/* Bookmarks Dropdown Drawer */}
              {showBookmarksModal && (
                <div className="bookmarks-dropdown">
                  <div className="bookmarks-header">
                    <h4>Saved Careers ({bookmarksCount})</h4>
                    <button
                      className="close-dropdown-btn"
                      onClick={() => setShowBookmarksModal(false)}
                    >
                      &times;
                    </button>
                  </div>
                  {bookmarks.length === 0 ? (
                    <p className="bookmarks-empty">No careers bookmarked yet. Click the ❤️ on any career card to save it!</p>
                  ) : (
                    <ul className="bookmarks-list">
                      {bookmarks.map((c) => (
                        <li key={c.id} className="bookmark-item">
                          <Link
                            to={`/careers/${c.id}`}
                            onClick={() => setShowBookmarksModal(false)}
                            className="bookmark-item-link"
                          >
                            <span>{c.icon}</span>
                            <span className="bookmark-title">{c.title}</span>
                          </Link>
                          <button
                            className="remove-bookmark-btn"
                            onClick={() => dispatch(removeBookmark(c.id))}
                            title="Remove"
                          >
                            🗑️
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              )}
            </div>

            <ThemeToggle />

            {/* Authentication State */}
            {isAuthenticated ? (
              <div className="navbar-user">
                <span className="navbar-user-avatar">{user.avatar || '👤'}</span>
                <span className="navbar-user-name">{user.name}</span>
                <button
                  className="navbar-logout-btn"
                  onClick={handleLogout}
                  title="Sign Out"
                >
                  🚪
                </button>
              </div>
            ) : (
              <div className="navbar-auth-btns">
                <Link to="/login" className="btn-auth-login">
                  Sign In
                </Link>
                <Link to="/signup" className="btn-auth-signup">
                  Sign Up
                </Link>
              </div>
            )}

            {/* Mobile Hamburger Button */}
            <button
              className={`hamburger ${isMobileOpen ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(prev => !prev)}
              aria-label="Toggle navigation menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        <NavLink to="/" className="navbar-link" onClick={closeMobile}>
          Home
        </NavLink>
        <NavLink to="/careers" className="navbar-link" onClick={closeMobile}>
          Careers
        </NavLink>
        <NavLink to="/mentor" className="navbar-link" onClick={closeMobile}>
          AI Mentor
        </NavLink>
        <NavLink to="/resume" className="navbar-link" onClick={closeMobile}>
          Resume Analyzer
        </NavLink>

        <div className="mobile-auth-section">
          {isAuthenticated ? (
            <div className="mobile-user-row">
              <span>{user.name} ({user.email})</span>
              <button className="navbar-logout-btn" onClick={handleLogout}>
                Log Out 🚪
              </button>
            </div>
          ) : (
            <div className="mobile-auth-links">
              <Link to="/login" className="btn-auth-login" onClick={closeMobile}>
                Sign In
              </Link>
              <Link to="/signup" className="btn-auth-signup" onClick={closeMobile}>
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;
