import { useState, useEffect } from 'react'

function ProgressBar({ label, percentage, color }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(percentage)
    }, 100)
    return () => clearTimeout(timer)
  }, [percentage])

  return (
    <div className="progress-bar-container">
      <div className="progress-bar-header">
        <span className="progress-bar-label">{label}</span>
        <span className="progress-bar-value">{percentage}%</span>
      </div>
      <div className="progress-bar-track">
        <div
          className="progress-bar-fill"
          style={{
            width: `${width}%`,
            background: color || 'var(--accent-gradient)'
          }}
        />
      </div>
    </div>
  )
}

export default ProgressBar
