import { useState } from 'react'
import AnimatedCounter from '../common/AnimatedCounter'
import '../../styles/ResumeAnalyzer.css'

function ResumeAnalyzer({ career }) {
  const [resumeText, setResumeText] = useState('')
  const [analysis, setAnalysis] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const analyzeResume = () => {
    if (!resumeText.trim()) return

    setIsAnalyzing(true)

    setTimeout(() => {
      const resumeLower = resumeText.toLowerCase()
      const matched = []
      const missing = []

      career.skills.forEach(skill => {
        const skillWords = skill.name.toLowerCase().split(/[\s\/\(\)]+/)
        const isMatched = skillWords.some(word =>
          word.length > 2 && resumeLower.includes(word)
        )
        if (isMatched) {
          matched.push(skill.name)
        } else {
          missing.push(skill.name)
        }
      })

      const score = Math.round((matched.length / career.skills.length) * 100)

      const suggestions = []
      if (missing.length > 0) {
        suggestions.push(`Add these missing skills to your resume: ${missing.slice(0, 3).join(', ')}`)
      }
      if (!resumeLower.includes('project')) {
        suggestions.push('Include relevant project experience to strengthen your resume')
      }
      if (!resumeLower.includes('github') && !resumeLower.includes('portfolio')) {
        suggestions.push('Add links to your GitHub or portfolio to showcase your work')
      }
      if (resumeText.length < 200) {
        suggestions.push('Your resume seems short. Add more details about your experience and achievements')
      }
      if (!resumeLower.includes('certif')) {
        suggestions.push('Consider adding relevant certifications to boost your profile')
      }

      setAnalysis({ score, matched, missing, suggestions })
      setIsAnalyzing(false)
    }, 2000)
  }

  const getScoreColor = (score) => {
    if (score >= 70) return '#10B981'
    if (score >= 40) return '#F59E0B'
    return '#EF4444'
  }

  return (
    <div className="resume-analyzer">
      <div className="container">
        <h2 className="section-title">
          📄 <span className="gradient-text">Resume Analyzer</span>
        </h2>
        <p className="section-subtitle">
          Paste your resume text and see how well it matches the {career.title} role.
        </p>
      </div>

      <div className="resume-analyzer-container">
        <div className="resume-content">
          <div className="resume-input-section">
            <h3 className="resume-input-title">📝 Paste Your Resume</h3>
            <textarea
              className="resume-textarea"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder={`Paste your resume text here...\n\nExample:\nJohn Doe\nSoftware Engineer\n\nSkills: JavaScript, React, Node.js, Python...\nExperience: Built e-commerce platform...\nProjects: GitHub portfolio, open source contributions...`}
            />
            <button
              className="resume-analyze-btn"
              onClick={analyzeResume}
              disabled={!resumeText.trim() || isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing... 🔍' : 'Analyze Resume ⚡'}
            </button>
          </div>

          <div className="resume-results">
            <h3 className="resume-results-title">📊 Analysis Results</h3>

            {analysis ? (
              <>
                <div
                  className="resume-score-circle"
                  style={{
                    borderColor: getScoreColor(analysis.score),
                    color: getScoreColor(analysis.score)
                  }}
                >
                  <div className="resume-score-value">
                    <AnimatedCounter target={analysis.score} duration={1000} suffix="%" />
                  </div>
                  <div className="resume-score-label">Match Score</div>
                </div>

                <div className="resume-matched-skills">
                  <h4 className="resume-matched-title">✅ Matched Skills ({analysis.matched.length})</h4>
                  <div className="resume-skill-tags">
                    {analysis.matched.map((skill, i) => (
                      <span key={i} className="resume-skill-tag matched">{skill}</span>
                    ))}
                  </div>
                </div>

                {analysis.missing.length > 0 && (
                  <div className="resume-matched-skills">
                    <h4 className="resume-matched-title">❌ Missing Skills ({analysis.missing.length})</h4>
                    <div className="resume-skill-tags">
                      {analysis.missing.map((skill, i) => (
                        <span key={i} className="resume-skill-tag missing">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="resume-suggestions">
                  <h4 className="resume-suggestions-title">💡 Suggestions</h4>
                  {analysis.suggestions.map((suggestion, i) => (
                    <div key={i} className="resume-suggestion">
                      <span className="resume-suggestion-icon">⚡</span>
                      <span className="resume-suggestion-text">{suggestion}</span>
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div className="resume-placeholder">
                <div className="resume-placeholder-icon">📋</div>
                <p className="resume-placeholder-text">
                  Paste your resume and click "Analyze" to see how well you match this role.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeAnalyzer
