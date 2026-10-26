import { Link } from 'react-router-dom';
import '../../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
            <span className="footer-logo-icon">⚡</span>
            <span className="footer-logo-text">Future Forge</span>
          </Link>
          <p className="footer-description">
            An interactive career simulator that helps you explore, plan, and forge your ideal tech career path.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Explore</h4>
          <div className="footer-links">
            <Link to="/careers" className="footer-link">Career Paths</Link>
            <Link to="/" className="footer-link">Why Future Forge</Link>
            <Link to="/mentor" className="footer-link">AI Mentor</Link>
            <Link to="/resume" className="footer-link">Resume Analyzer</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Top Roles</h4>
          <div className="footer-links">
            <Link to="/careers/software-engineer" className="footer-link">Software Engineer</Link>
            <Link to="/careers/data-scientist" className="footer-link">Data Scientist</Link>
            <Link to="/careers/cloud-architect" className="footer-link">Cloud Architect</Link>
            <Link to="/careers/cybersecurity-analyst" className="footer-link">Cybersecurity</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Account</h4>
          <div className="footer-links">
            <Link to="/login" className="footer-link">Sign In</Link>
            <Link to="/signup" className="footer-link">Sign Up</Link>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="footer-link">GitHub Project</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Future Forge. Built for academic excellence and career discovery.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
