import { useState, useEffect } from 'react'
import { testimonials } from '../../data/careerData'
import '../../styles/Testimonials.css'

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const currentTestimonial = testimonials[activeIndex]

  return (
    <div className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Users Say</h2>
        <p className="section-subtitle">
          Join thousands of students and professionals who forged their career paths with us.
        </p>
      </div>

      <div className="testimonials-carousel">
        <div className="testimonial-card" key={activeIndex}>
          <div className="testimonial-avatar">{currentTestimonial.avatar}</div>
          <p className="testimonial-text">{currentTestimonial.text}</p>
          <h4 className="testimonial-name">{currentTestimonial.name}</h4>
          <p className="testimonial-role">{currentTestimonial.role}</p>
        </div>

        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`testimonial-dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
