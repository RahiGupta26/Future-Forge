import { useEffect, useRef } from 'react'
import CareerCard from './CareerCard'
import { careerData } from '../../data/careerData'
import '../../styles/CareerSelection.css'

function CareerSelection({ onSelect }) {
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

    const cards = sectionRef.current?.querySelectorAll('.career-card')
    if (cards) {
      cards.forEach((card) => {
        card.classList.add('scroll-reveal')
        observer.observe(card)
      })
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="career-selection" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">
          Choose Your <span className="gradient-text">Career Path</span>
        </h2>
        <p className="section-subtitle">
          Select a career to begin your simulation. Experience the journey from day one to leadership.
        </p>
      </div>

      <div className="career-grid">
        {careerData.map((career) => (
          <CareerCard
            key={career.id}
            career={career}
            onSelect={onSelect}
          />
        ))}
      </div>
    </div>
  )
}

export default CareerSelection
