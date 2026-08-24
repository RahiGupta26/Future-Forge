import { useState } from 'react'
import '../../styles/RequiredProjects.css'

function RequiredProjects({ projects }) {
  const [expandedIndex, setExpandedIndex] = useState(null)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  const getDifficultyClass = (difficulty) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'badge-beginner'
      case 'intermediate': return 'badge-intermediate'
      case 'advanced': return 'badge-advanced'
      default: return ''
    }
  }

  return (
    <div className="required-projects">
      <h2 className="required-projects-title">
        📁 Required Projects
      </h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article key={index} className="project-card" onClick={() => toggleExpand(index)}>
            <div className="project-card-header">
              <h3 className="project-card-title">{project.title}</h3>
              <span className={`badge ${getDifficultyClass(project.difficulty)}`}>
                {project.difficulty}
              </span>
            </div>
            
            <p className={`project-card-description ${expandedIndex !== index ? 'collapsed' : ''}`}>
              {project.description}
            </p>

            {project.description.length > 80 && (
              <button className="project-read-more" onClick={(e) => {
                e.stopPropagation()
                toggleExpand(index)
              }}>
                {expandedIndex === index ? 'Show less' : 'Read more'}
              </button>
            )}

            <div className="project-tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="project-tech-tag">{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default RequiredProjects
