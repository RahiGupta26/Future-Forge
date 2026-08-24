import { useState } from 'react'
import '../../styles/TopCompanies.css'

function TopCompanies({ companies }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const types = ['All', ...new Set(companies.map(c => c.type))]

  const filteredCompanies = activeFilter === 'All'
    ? companies
    : companies.filter(c => c.type === activeFilter)

  return (
    <div className="top-companies">
      <h2 className="top-companies-title">
        🏢 Top Companies Hiring
      </h2>

      <div className="companies-filter">
        {types.map((type) => (
          <button
            key={type}
            className={`companies-filter-btn ${activeFilter === type ? 'active' : ''}`}
            onClick={() => setActiveFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="companies-grid">
        {filteredCompanies.map((company, index) => (
          <article key={index} className="company-card">
            <div className="company-logo">{company.logo}</div>
            <h3 className="company-name">{company.name}</h3>
            <p className="company-type">{company.type}</p>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TopCompanies
