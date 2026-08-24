import { useState, useEffect } from 'react'
import AnimatedCounter from '../common/AnimatedCounter'
import '../../styles/SalaryGrowth.css'

function SalaryGrowth({ salaryData, color, gradient }) {
  const [isVisible, setIsVisible] = useState(false)
  const maxSalary = Math.max(...salaryData.map(d => d.salary))

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="salary-growth">
      <h2 className="salary-growth-title">
        💰 Salary Growth Trajectory
      </h2>

      <div className="salary-chart">
        <div className="salary-bars">
          {salaryData.map((data, index) => (
            <div key={index} className="salary-bar-container">
              <div className="salary-bar-value">
                {data.label}
              </div>
              <div className="salary-bar-wrapper">
                <div
                  className="salary-bar"
                  style={{
                    height: isVisible ? `${(data.salary / maxSalary) * 100}%` : '0%',
                    background: gradient || color,
                    transitionDelay: `${index * 0.15}s`
                  }}
                />
              </div>
              <div className="salary-bar-label">{data.year}</div>
            </div>
          ))}
        </div>

        <div className="salary-summary">
          <div className="salary-summary-card">
            <div className="salary-summary-label">Starting Salary</div>
            <div className="salary-summary-value">
              <AnimatedCounter target={salaryData[0].salary} prefix="₹" duration={1500} />
            </div>
          </div>
          <div className="salary-summary-card">
            <div className="salary-summary-label">Mid-Career</div>
            <div className="salary-summary-value">
              <AnimatedCounter target={salaryData[Math.floor(salaryData.length / 2)].salary} prefix="₹" duration={1800} />
            </div>
          </div>
          <div className="salary-summary-card">
            <div className="salary-summary-label">Senior Level</div>
            <div className="salary-summary-value">
              <AnimatedCounter target={salaryData[salaryData.length - 1].salary} prefix="₹" duration={2000} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SalaryGrowth
