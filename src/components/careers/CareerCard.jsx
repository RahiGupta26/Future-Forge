function CareerCard({ career, onSelect }) {
  return (
    <article
      className="career-card"
      onClick={() => onSelect(career.id)}
      style={{ '--career-color': career.color }}
    >
      <div
        className="career-card-icon"
        role="img"
        aria-label={career.title}
      >
        {career.icon}
      </div>
      <h3 className="career-card-title">{career.title}</h3>
      <p className="career-card-tagline">{career.tagline}</p>
      <span
        className="career-card-cta"
        style={{ background: career.gradient }}
      >
        Start Simulation
        <span className="career-card-cta-arrow">→</span>
      </span>
    </article>
  )
}

export default CareerCard
