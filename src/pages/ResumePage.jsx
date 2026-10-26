import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { careerData } from '../data/careerData';
import ResumeAnalyzer from '../components/resume/ResumeAnalyzer';

function ResumePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const careerParam = searchParams.get('career');

  const [selectedCareerId, setSelectedCareerId] = useState(
    careerParam || careerData[0].id
  );

  const selectedCareer = careerData.find(c => c.id === selectedCareerId) || careerData[0];

  const handleCareerChange = (e) => {
    const newId = e.target.value;
    setSelectedCareerId(newId);
    setSearchParams({ career: newId });
  };

  return (
    <div className="resume-page" style={{ paddingTop: 'calc(var(--navbar-height) + 32px)', paddingBottom: '80px' }}>
      <div className="container">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <span style={{
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '1px',
            color: 'var(--accent-primary)',
            background: 'rgba(108, 99, 255, 0.1)',
            padding: '6px 14px',
            borderRadius: 'var(--radius-full)'
          }}>
            Protected Feature
          </span>
          <h1 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: 700,
            marginTop: '16px',
            marginBottom: '12px',
            color: 'var(--text-primary)'
          }}>
            Targeted <span className="gradient-text">Resume Analyzer</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '580px', margin: '0 auto 24px auto' }}>
            Benchmark your resume against required industry competencies, discover keyword gaps, and optimize your ATS score.
          </p>

          {/* Target Role Selector */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '12px',
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            padding: '8px 16px',
            borderRadius: 'var(--radius-full)',
            boxShadow: 'var(--shadow-sm)'
          }}>
            <span style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: 500 }}>
              Target Career Benchmark:
            </span>
            <select
              value={selectedCareerId}
              onChange={handleCareerChange}
              style={{
                background: 'var(--bg-tertiary)',
                color: 'var(--text-primary)',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-sm)',
                padding: '6px 12px',
                fontSize: '0.9rem',
                fontWeight: 600,
                outline: 'none',
                cursor: 'pointer'
              }}
            >
              {careerData.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.icon} {c.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Resume Analyzer Component */}
        <ResumeAnalyzer career={selectedCareer} />
      </div>
    </div>
  );
}

export default ResumePage;
