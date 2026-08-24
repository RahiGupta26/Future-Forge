import { useState } from 'react'
import SkillsRoadmap from './SkillsRoadmap.jsx'
import SalaryGrowth from './SalaryGrowth.jsx'
import TopCompanies from './TopCompanies.jsx'
import DailyRoutine from './DailyRoutine.jsx'
import RequiredProjects from './RequiredProjects.jsx'
import CareerTimeline from './CareerTimeline.jsx'
import InterviewPrep from './InterviewPrep.jsx'
import '../../styles/SimulatorDashboard.css'

function SimulatorDashboard({ career }) {
  const [activeTab, setActiveTab] = useState('skills')

  const tabs = [
    { id: 'skills', label: 'Skills Roadmap', icon: '📊' },
    { id: 'salary', label: 'Salary Growth', icon: '💰' },
    { id: 'companies', label: 'Companies', icon: '🏢' },
    { id: 'routine', label: 'Daily Routine', icon: '🕐' },
    { id: 'projects', label: 'Projects', icon: '📁' },
    { id: 'timeline', label: 'Timeline', icon: '📅' },
    { id: 'interview', label: 'Interview', icon: '🎯' }
  ]

  const renderTabContent = () => {
    switch (activeTab) {
      case 'skills':
        return <SkillsRoadmap skills={career.skills} color={career.color} />
      case 'salary':
        return <SalaryGrowth salaryData={career.salaryGrowth} color={career.color} gradient={career.gradient} />
      case 'companies':
        return <TopCompanies companies={career.companies} />
      case 'routine':
        return <DailyRoutine routine={career.dailyRoutine} />
      case 'projects':
        return <RequiredProjects projects={career.projects} />
      case 'timeline':
        return <CareerTimeline timeline={career.timeline} gradient={career.gradient} />
      case 'interview':
        return <InterviewPrep interviewData={career.interviewPrep} />
      default:
        return <SkillsRoadmap skills={career.skills} color={career.color} />
    }
  }

  return (
    <div className="simulator-dashboard">
      <div className="simulator-header">
        <div className="simulator-career-icon">{career.icon}</div>
        <h1 className="simulator-career-title" style={{ color: career.color }}>
          {career.title}
        </h1>
        <p className="simulator-career-tagline">{career.tagline}</p>
      </div>

      <nav className="simulator-tabs" aria-label="Career simulator navigation">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`simulator-tab ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-selected={activeTab === tab.id}
          >
            <span className="simulator-tab-icon">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </nav>

      <div className="simulator-content" key={activeTab}>
        {renderTabContent()}
      </div>
    </div>
  )
}

export default SimulatorDashboard
