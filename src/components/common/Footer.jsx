import '../../styles/Footer.css'

function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="footer-logo-icon">⚡</span>
            <span className="footer-logo-text">Future Forge</span>
          </div>
          <p className="footer-description">
            An interactive career simulator that helps you explore, plan, and forge your ideal tech career path.
          </p>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Explore</h4>
          <div className="footer-links">
            <span className="footer-link" onClick={() => scrollTo('careers')}>Career Paths</span>
            <span className="footer-link" onClick={() => scrollTo('features')}>Features</span>
            <span className="footer-link" onClick={() => scrollTo('testimonials')}>Testimonials</span>
            <span className="footer-link" onClick={() => scrollTo('mentor')}>AI Mentor</span>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Tools</h4>
          <div className="footer-links">
            <span className="footer-link" onClick={() => scrollTo('mentor')}>AI Career Mentor</span>
            <span className="footer-link" onClick={() => scrollTo('resume')}>Resume Analyzer</span>
            <span className="footer-link" onClick={() => scrollTo('simulator')}>Simulator</span>
            <span className="footer-link" onClick={() => scrollTo('home')}>Home</span>
          </div>
        </div>

        <div className="footer-column">
          <h4 className="footer-column-title">Resources</h4>
          <div className="footer-links">
            <span className="footer-link">Blog</span>
            <span className="footer-link">Community</span>
            <span className="footer-link">Documentation</span>
            <span className="footer-link">Support</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2026 Future Forge. Built with ⚛️ React. All rights reserved.
        </p>
        <div className="footer-social">
          <span className="footer-social-link" title="GitHub">🐙</span>
          <span className="footer-social-link" title="LinkedIn">💼</span>
          <span className="footer-social-link" title="Twitter">🐦</span>
          <span className="footer-social-link" title="Discord">💬</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer

