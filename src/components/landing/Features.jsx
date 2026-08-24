import { useEffect, useRef } from 'react'
import '../../styles/Features.css'

function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed')
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll('.scroll-reveal')
    if (cards) {
      cards.forEach((card) => observer.observe(card))
    }

    return () => observer.disconnect()
  }, [])

  const features = [
    {
      icon: '🎮',
      title: 'Simulate Careers',
      description: 'Live through different career paths. See the skills, salary growth, daily routines, and real-world projects for each role.'
    },
    {
      icon: '🗺️',
      title: 'Visual Roadmaps',
      description: 'Explore detailed skill trees, career timelines, and growth trajectories — all beautifully visualized and interactive.'
    },
    {
      icon: '🎯',
      title: 'Interview Ready',
      description: 'Get role-specific interview questions, preparation tips, and curated resources to ace your dream job interview.'
    }
  ]

  return (
    <div className="features" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Why <span className="gradient-text">Future Forge</span>?
        </h2>
        <p className="section-subtitle">
          We do not just recommend careers — we let you experience them before you commit.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <article
            key={index}
            className="feature-card scroll-reveal"
            style={{ transitionDelay: `${index * 0.15}s` }}
          >
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Features
