import { useState } from 'react';
import AnimatedCounter from '../common/AnimatedCounter';
import '../../styles/ResumeAnalyzer.css';

function ResumeAnalyzer({ career }) {
  const [resumeText, setResumeText] = useState('');
  const [analysis, setAnalysis] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  // GitHub REST API Integration State
  const [githubUsername, setGithubUsername] = useState('');
  const [githubUser, setGithubUser] = useState(null);
  const [githubRepos, setGithubRepos] = useState([]);
  const [githubLoading, setGithubLoading] = useState(false);
  const [githubError, setGithubError] = useState(null);

  // Resume keyword analysis
  const analyzeResume = () => {
    if (!resumeText.trim()) return;
    setIsAnalyzing(true);

    setTimeout(() => {
      const resumeLower = resumeText.toLowerCase();
      const matched = [];
      const missing = [];

      career.skills.forEach(skill => {
        const skillWords = skill.name.toLowerCase().split(/[\s\/\(\)]+/);
        const isMatched = skillWords.some(word =>
          word.length > 2 && resumeLower.includes(word)
        );
        if (isMatched) {
          matched.push(skill.name);
        } else {
          missing.push(skill.name);
        }
      });

      // Bonus points if GitHub repos matched any skills
      let bonus = 0;
      if (githubRepos.length > 0) {
        const repoLanguages = githubRepos
          .map(r => r.language?.toLowerCase())
          .filter(Boolean);

        missing.forEach((miss, idx) => {
          if (repoLanguages.some(lang => miss.toLowerCase().includes(lang))) {
            bonus += 5;
          }
        });
      }

      const rawScore = Math.round((matched.length / career.skills.length) * 100);
      const score = Math.min(100, rawScore + bonus);

      const suggestions = [];
      if (missing.length > 0) {
        suggestions.push(`Add these missing skills: ${missing.slice(0, 3).join(', ')}`);
      }
      if (!resumeLower.includes('project')) {
        suggestions.push('Include relevant project experience with measurable impact');
      }
      if (!resumeLower.includes('github') && !githubUser) {
        suggestions.push('Link your GitHub portfolio to verify hands-on coding proficiency');
      }
      if (resumeText.length < 200) {
        suggestions.push('Your resume seems brief. Elaborate on your technical contributions');
      }
      if (!resumeLower.includes('certif')) {
        suggestions.push('Industry certifications can elevate your application above peers');
      }

      setAnalysis({ score, matched, missing, suggestions, bonus });
      setIsAnalyzing(false);
    }, 1500);
  };

  // Consuming GitHub REST API with fetch, loading, error, and retry
  const fetchGitHubProfile = async () => {
    const trimmed = githubUsername.trim();
    if (!trimmed) return;

    setGithubLoading(true);
    setGithubError(null);

    try {
      // 1. Fetch user profile
      const userRes = await fetch(`https://api.github.com/users/${encodeURIComponent(trimmed)}`);
      if (!userRes.ok) {
        if (userRes.status === 404) {
          throw new Error(`GitHub user "${trimmed}" not found.`);
        } else if (userRes.status === 403) {
          throw new Error('GitHub API rate limit reached. Please try again later.');
        } else {
          throw new Error(`Failed to load GitHub profile (${userRes.status}).`);
        }
      }
      const userData = await userRes.json();

      // 2. Fetch user repositories
      const reposRes = await fetch(`https://api.github.com/users/${encodeURIComponent(trimmed)}/repos?sort=updated&per_page=6`);
      let reposData = [];
      if (reposRes.ok) {
        reposData = await reposRes.json();
      }

      setGithubUser(userData);
      setGithubRepos(reposData);

      // Auto-append GitHub summary into resume text if empty or short
      if (!resumeText.includes('github.com')) {
        const repoSummary = reposData.map(r => r.name + (r.language ? ` (${r.language})` : '')).join(', ');
        setResumeText(prev =>
          prev + (prev ? '\n\n' : '') +
          `GitHub Profile: https://github.com/${userData.login}\nPublic Repositories (${userData.public_repos}): ${repoSummary}`
        );
      }
    } catch (err) {
      setGithubError(err.message || 'An error occurred while connecting to GitHub.');
    } finally {
      setGithubLoading(false);
    }
  };

  const getScoreColor = (score) => {
    if (score >= 70) return '#10B981';
    if (score >= 40) return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="resume-analyzer">
      <div className="resume-analyzer-container">
        <div className="resume-content">
          {/* Left Column: Input + GitHub REST API integration */}
          <div className="resume-input-section">
            <h3 className="resume-input-title">📝 Input Resume Data</h3>

            {/* Live Third-Party GitHub REST API Card */}
            <div style={{
              background: 'var(--bg-tertiary)',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '16px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <span style={{ fontSize: '1.2rem' }}>🐙</span>
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Integrate GitHub Portfolio (REST API)
                </span>
              </div>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '0 0 12px 0' }}>
                Fetch public repositories to auto-verify skills and boost your match rating.
              </p>

              <div style={{ display: 'flex', gap: '8px' }}>
                <input
                  type="text"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && fetchGitHubProfile()}
                  placeholder="e.g. torvalds, gaearon..."
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    border: '1px solid var(--border-color)',
                    background: 'var(--bg-secondary)',
                    color: 'var(--text-primary)',
                    fontSize: '0.88rem'
                  }}
                />
                <button
                  type="button"
                  onClick={fetchGitHubProfile}
                  disabled={githubLoading || !githubUsername.trim()}
                  style={{
                    padding: '8px 16px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'var(--accent-primary)',
                    color: 'white',
                    border: 'none',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: githubLoading ? 'not-allowed' : 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {githubLoading ? 'Fetching...' : 'Verify 🔍'}
                </button>
              </div>

              {/* GitHub Error & Retry State */}
              {githubError && (
                <div style={{
                  marginTop: '12px',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'rgba(239, 68, 68, 0.1)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  color: '#EF4444',
                  fontSize: '0.82rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center'
                }}>
                  <span>{githubError}</span>
                  <button
                    onClick={fetchGitHubProfile}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: '#EF4444',
                      fontWeight: 700,
                      cursor: 'pointer',
                      textDecoration: 'underline'
                    }}
                  >
                    Retry
                  </button>
                </div>
              )}

              {/* Live GitHub Profile Display */}
              {githubUser && (
                <div style={{
                  marginTop: '12px',
                  padding: '12px',
                  borderRadius: 'var(--radius-sm)',
                  background: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <img
                      src={githubUser.avatar_url}
                      alt={githubUser.login}
                      style={{ width: '40px', height: '40px', borderRadius: '50%' }}
                    />
                    <div>
                      <div style={{ fontWeight: 600, color: 'var(--text-primary)', fontSize: '0.9rem' }}>
                        {githubUser.name || githubUser.login}
                      </div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                        @{githubUser.login} • {githubUser.public_repos} Public Repositories
                      </div>
                    </div>
                  </div>

                  {githubRepos.length > 0 && (
                    <div style={{ marginTop: '10px', display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {githubRepos.slice(0, 4).map((repo) => (
                        <a
                          key={repo.id}
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                          style={{
                            fontSize: '0.75rem',
                            background: 'var(--bg-tertiary)',
                            color: 'var(--accent-primary)',
                            padding: '3px 8px',
                            borderRadius: 'var(--radius-sm)',
                            textDecoration: 'none',
                            fontWeight: 500,
                            border: '1px solid var(--border-color)'
                          }}
                        >
                          📦 {repo.name} {repo.language ? `(${repo.language})` : ''} {repo.stargazers_count > 0 ? `⭐${repo.stargazers_count}` : ''}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>

            <textarea
              className="resume-textarea"
              value={resumeText}
              onChange={(e) => setResumeText(e.target.value)}
              placeholder={`Paste your resume text here...\n\nExample:\nAlex Morgan\nSoftware Engineer\nSkills: JavaScript, React, Node.js, Python, Git...\nExperience: Developed scalable web microservices...`}
              rows={9}
            />

            <button
              className="resume-analyze-btn"
              onClick={analyzeResume}
              disabled={!resumeText.trim() || isAnalyzing}
            >
              {isAnalyzing ? 'Analyzing Competencies... 🔍' : 'Analyze Resume Score ⚡'}
            </button>
          </div>

          {/* Right Column: Analysis Results */}
          <div className="resume-results">
            <h3 className="resume-results-title">📊 ATS Score & Match Analysis</h3>

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
                  <div className="resume-score-label">Role Fit Score</div>
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
                    <h4 className="resume-matched-title">❌ Missing Competencies ({analysis.missing.length})</h4>
                    <div className="resume-skill-tags">
                      {analysis.missing.map((skill, i) => (
                        <span key={i} className="resume-skill-tag missing">{skill}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="resume-suggestions">
                  <h4 className="resume-suggestions-title">💡 Personalized Recommendations</h4>
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
                  Enter your resume or link your GitHub profile above and click &ldquo;Analyze Resume Score&rdquo; to benchmark your technical fit.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// hello

export default ResumeAnalyzer;
