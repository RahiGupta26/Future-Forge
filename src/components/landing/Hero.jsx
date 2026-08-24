import { useState} from 'react'
import { useEffect } from 'react'
import AnimatedCounter from '../common/AnimatedCounter.jsx'
import '../../styles/Hero.css'

function Hero() {
  const [displayText, setDisplayText] = useState('')
  const fullText = 'Forge Your Future'
  const [isTypingDone, setIsTypingDone] = useState(false)

  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(typingInterval)
        setIsTypingDone(true)
      }
    }, 100)

    return () => clearInterval(typingInterval)
  }, [])

  const scrollToCareers = () => {
    const element = document.getElementById('careers')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="hero">
      <div className="hero-bg" aria-hidden="true" />
      
      <div className="hero-particles" aria-hidden="true">
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <span className="hero-badge-dot"></span>
          Interactive Career Simulator
        </div>

        <h1 className="hero-title">
          <span className={`hero-title-highlight hero-typewriter${isTypingDone ? ' hero-typewriter-done' : ''}`}>
            {displayText}
          </span>
          <br />
          With Future Forge
        </h1>

        <p className="hero-description">
          Do not just choose a career — live through it. Explore skills, salary growth, 
          daily routines, and interview prep for top tech careers.
        </p>

        <div className="hero-cta-group">
          <button className="hero-cta-primary" onClick={scrollToCareers}>
            Start Simulating ⚡
          </button>
          <button className="hero-cta-secondary" onClick={() => {
            const el = document.getElementById('features')
            if (el) el.scrollIntoView({ behavior: 'smooth' })
          }}>
            Learn More →
          </button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <div className="hero-stat-value">
              <AnimatedCounter target={6} duration={1500} suffix="+" />
            </div>
            <div className="hero-stat-label">Career Paths</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              <AnimatedCounter target={50} duration={2000} suffix="+" />
            </div>
            <div className="hero-stat-label">Skills Mapped</div>
          </div>
          <div className="hero-stat">
            <div className="hero-stat-value">
              <AnimatedCounter target={100} duration={2000} suffix="%" />
            </div>
            <div className="hero-stat-label">Free & Visual</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
