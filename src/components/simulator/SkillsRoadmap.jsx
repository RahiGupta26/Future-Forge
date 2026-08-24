import ProgressBar from '../common/ProgressBar'
import '../../styles/SkillsRoadmap.css'

function SkillsRoadmap({ skills, color }) {
  const categories = {
    core: { label: 'Core Skills', icon: '⭐' },
    fundamental: { label: 'Fundamentals', icon: '📐' },
    advanced: { label: 'Advanced', icon: '🚀' },
    tools: { label: 'Tools & Platforms', icon: '🛠️' }
  }

  const groupedSkills = skills.reduce((acc, skill) => {
    const cat = skill.category || 'core'
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <div className="skills-roadmap">
      <h2 className="skills-roadmap-title">
        📊 Skills Roadmap
      </h2>

      <div className="skills-categories">
        {Object.entries(groupedSkills).map(([categoryKey, categorySkills]) => (
          <div key={categoryKey} className="skills-category">
            <h3 className="skills-category-title">
              {categories[categoryKey]?.icon} {categories[categoryKey]?.label || categoryKey}
              <span className="skills-category-badge">
                {categorySkills.length} skills
              </span>
            </h3>
            <div className="skills-list">
              {categorySkills.map((skill, index) => (
                <ProgressBar
                  key={index}
                  label={skill.name}
                  percentage={skill.level}
                  color={color}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkillsRoadmap
