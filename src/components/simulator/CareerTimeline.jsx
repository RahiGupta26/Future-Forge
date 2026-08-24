import '../../styles/CareerTimeline.css'

function CareerTimeline({ timeline, gradient }) {
  return (
    <div className="career-timeline">
      <h2 className="career-timeline-title">
        📅 Career Growth Timeline
      </h2>

      <div className="timeline-container">
        <div className="timeline-line" aria-hidden="true" />
        
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-milestone">{item.milestone}</h3>
              <p className="timeline-description">{item.description}</p>
            </div>
            <div
              className="timeline-item-dot"
              style={{ background: gradient }}
              aria-hidden="true"
            />
            <div style={{ width: '45%' }} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerTimeline
