import '../../styles/SkillsRoadmap.css';

function SkillsRoadmap({ skills, color }) {
  const categories = {
    core: { label: 'Core Skills', icon: '⭐', desc: 'Must-have primary proficiencies for this role' },
    fundamental: { label: 'Fundamentals', icon: '📐', desc: 'Foundational theory, architecture, and principles' },
    advanced: { label: 'Advanced Competencies', icon: '🚀', desc: 'Specialized techniques for senior-level execution' },
    tools: { label: 'Tools & Platforms', icon: '🛠️', desc: 'Industry-standard workflows, software, and ecosystems' }
  };

  const groupedSkills = skills.reduce((acc, skill) => {
    const cat = skill.category || 'core';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-roadmap">
      <div className="skills-roadmap-header">
        <div>
          <h2 className="skills-roadmap-title">
            <span className="skills-title-icon">🎯</span> Essential Skills & Technologies
          </h2>
          <p className="skills-roadmap-subtitle">
            Core technical and conceptual competencies required across modern industry job specifications.
          </p>
        </div>
        <div className="skills-total-badge">
          <span>{skills.length} Total Skills</span>
        </div>
      </div>

      <div className="skills-categories-grid">
        {Object.entries(groupedSkills).map(([categoryKey, categorySkills]) => {
          const catInfo = categories[categoryKey] || {
            label: categoryKey,
            icon: '🔹',
            desc: 'Technical capabilities'
          };

          return (
            <div key={categoryKey} className="skills-category-card">
              <div className="skills-category-header">
                <div className="skills-category-title-group">
                  <span className="skills-category-icon">{catInfo.icon}</span>
                  <div>
                    <h3 className="skills-category-title">{catInfo.label}</h3>
                    <p className="skills-category-desc">{catInfo.desc}</p>
                  </div>
                </div>
                <span className="skills-category-count">
                  {categorySkills.length}
                </span>
              </div>

              {/* Clean, simple skill tags (no percentage bars) */}
              <div className="skills-tags-container">
                {categorySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="skill-pill"
                    style={{ '--pill-accent': color || 'var(--accent-primary)' }}
                  >
                    <span className="skill-pill-bullet">✓</span>
                    <span className="skill-pill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default SkillsRoadmap;
