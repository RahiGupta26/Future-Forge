import Accordion from '../common/Accordion'
import '../../styles/InterviewPrep.css'

function InterviewPrep({ interviewData }) {
  return (
    <div className="interview-prep">
      <h2 className="interview-prep-title">
        🎯 Interview Preparation
      </h2>

      <div className="interview-sections">
        <div className="interview-section">
          <h3 className="interview-section-title">
            💡 Common Interview Questions
          </h3>
          <div className="interview-questions-list">
            {interviewData.questions.map((question, index) => (
              <Accordion key={index} title={`Q${index + 1}: ${question}`}>
                <p>Prepare a structured answer for this question. Consider using the STAR method (Situation, Task, Action, Result) for behavioral questions.</p>
              </Accordion>
            ))}
          </div>
        </div>

        <div className="interview-section">
          <h3 className="interview-section-title">
            ✅ Preparation Tips
          </h3>
          <div className="interview-tips-list">
            {interviewData.tips.map((tip, index) => (
              <div key={index} className="interview-tip">
                <span className="interview-tip-icon">✓</span>
                <span className="interview-tip-text">{tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="interview-resources">
        <h3 className="interview-resources-title">
          📚 Recommended Resources
        </h3>
        <div className="resources-grid">
          {interviewData.resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="resource-card"
            >
              <div className="resource-name">{resource.name}</div>
              <div className="resource-type">{resource.type}</div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InterviewPrep
