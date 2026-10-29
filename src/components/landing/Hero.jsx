import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AnimatedCounter from '../common/AnimatedCounter';
import '../../styles/Hero.css';

function Hero() {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Forge Your Future';
  const [isTypingDone, setIsTypingDone] = useState(false);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTypingDone(true);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true" />

      <div className="hero-particles" aria-hidden="true">
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
        <div className="hero-particle"></div>
      </div>

      <div className="hero-content">
        

        <h1 className="hero-title">
          <span className={`hero-title-highlight hero-typewriter${isTypingDone ? ' hero-typewriter-done' : ''}`}>
            {displayText}
          </span>
          <br />
          With Future Forge
        </h1>

        <p className="hero-description">
          Don't just guess your future career — simulate it today. Explore visual skill roadmaps,
          salary progression, daily routines, and AI mentorship tailored for top tech careers.
        </p>

        <div className="hero-cta-group">
          <Link to="/careers" className="hero-cta-primary" style={{ textDecoration: 'none' }}>
            Explore Careers ⚡
          </Link>
          <Link to="/mentor" className="hero-cta-secondary" style={{ textDecoration: 'none' }}>
            AI Career Mentor 🧠
          </Link>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <AnimatedCounter target={6} duration={1500} suffix="+" />
            <div className="hero-stat-label">Career Paths</div>
          </div>
          <div className="hero-stat">
            <AnimatedCounter target={50} duration={2000} suffix="+" />
            <div className="hero-stat-label">Skills Mapped</div>
          </div>
          <div className="hero-stat">
            <AnimatedCounter target={100} duration={2000} suffix="%" />
            <div className="hero-stat-label">Free & Visual</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
