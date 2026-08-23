import {useState} from 'react'
import { useEffect } from 'react'
import ThemeToggle from './ThemeToggle'
import '../../styles/Navbar.css'


function Navbar({ onNavigate, onBackToHome, showBack }) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20
      setIsScrolled(scrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileOpen(false)
  }

  return (
    <header>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-logo" onClick={onBackToHome}>
            <span className="navbar-logo-icon">⚡</span>
            <span className="navbar-logo-text">Future Forge</span>
          </div>

          {!showBack ? (
            <div className="navbar-links">
              <button className="navbar-link" onClick={() => scrollToSection('home')}>Home</button>
              <button className="navbar-link" onClick={() => scrollToSection('features')}>Features</button>
              <button className="navbar-link" onClick={() => scrollToSection('careers')}>Careers</button>
              <button className="navbar-link" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
              <button className="navbar-link" onClick={() => scrollToSection('mentor')}>AI Mentor</button>
            </div>
          ) : (
            <div className="navbar-links">
              <button className="navbar-link" onClick={() => scrollToSection('simulator')}>Dashboard</button>
              <button className="navbar-link" onClick={() => scrollToSection('mentor')}>AI Mentor</button>
              <button className="navbar-link" onClick={() => scrollToSection('resume')}>Resume</button>
            </div>
          )}

          <div className="navbar-actions">
            {showBack && (
              <button className="navbar-back-btn" onClick={onBackToHome}>
                ← Back
              </button>
            )}
            <ThemeToggle />
            <button
              className={`hamburger ${isMobileOpen ? 'active' : ''}`}
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              aria-label="Toggle menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`}>
        {!showBack ? (
          <>
            <button className="navbar-link" onClick={() => scrollToSection('home')}>Home</button>
            <button className="navbar-link" onClick={() => scrollToSection('features')}>Features</button>
            <button className="navbar-link" onClick={() => scrollToSection('careers')}>Careers</button>
            <button className="navbar-link" onClick={() => scrollToSection('testimonials')}>Testimonials</button>
            <button className="navbar-link" onClick={() => scrollToSection('mentor')}>AI Mentor</button>
          </>
        ) : (
          <>
            <button className="navbar-link" onClick={() => scrollToSection('simulator')}>Dashboard</button>
            <button className="navbar-link" onClick={() => scrollToSection('mentor')}>AI Mentor</button>
            <button className="navbar-link" onClick={() => scrollToSection('resume')}>Resume</button>
            <button className="navbar-link" onClick={onBackToHome}>← Back to Home</button>
          </>
        )}
      </div>
    </header>
  )
}

export default Navbar
