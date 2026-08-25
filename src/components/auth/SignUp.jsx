import { useState } from 'react'
import '../../styles/Auth.css'

function SignUp({ onSignUp, onSwitchToLogin }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    } else if (!/(?=.*[0-9])/.test(formData.password)) {
      newErrors.password = 'Password must contain at least one number'
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const getPasswordStrength = () => {
    const pwd = formData.password
    if (!pwd) return { level: 0, label: '', color: '' }
    
    let score = 0
    if (pwd.length >= 6) score++
    if (pwd.length >= 10) score++
    if (/[A-Z]/.test(pwd)) score++
    if (/[0-9]/.test(pwd)) score++
    if (/[^A-Za-z0-9]/.test(pwd)) score++

    if (score <= 1) return { level: 20, label: 'Weak', color: '#EF4444' }
    if (score <= 2) return { level: 40, label: 'Fair', color: '#F59E0B' }
    if (score <= 3) return { level: 60, label: 'Good', color: '#F59E0B' }
    if (score <= 4) return { level: 80, label: 'Strong', color: '#10B981' }
    return { level: 100, label: 'Very Strong', color: '#10B981' }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsLoading(true)

    // Simulate sign up
    setTimeout(() => {
      setIsLoading(false)
      setSuccess(true)

      const userData = {
        name: formData.fullName,
        email: formData.email,
        avatar: '👤'
      }
      localStorage.setItem('futureforge-user', JSON.stringify(userData))

      // Auto-login after brief success message
      setTimeout(() => {
        onSignUp(userData)
      }, 1500)
    }, 2000)
  }

  const passwordStrength = getPasswordStrength()

  return (
    <div className="auth-page">
      <div className="auth-bg" aria-hidden="true" />
      <div className="auth-particles" aria-hidden="true">
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
        <div className="auth-particle"></div>
      </div>

      <div className="auth-card">
        <div className="auth-logo">
          <span className="auth-logo-icon">⚡</span>
          <span className="auth-logo-text">Future Forge</span>
        </div>

        <div className="auth-header">
          <h1 className="auth-title">Create Your Account</h1>
          <p className="auth-subtitle">Start your career simulation journey today</p>
        </div>

        {success ? (
          <div className="auth-success">
            ✅ Account created successfully! Redirecting...
          </div>
        ) : (
          <form className="auth-form" onSubmit={handleSubmit} noValidate>
            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-name">
                <span className="auth-label-icon">👤</span>
                Full Name
              </label>
              <input
                id="signup-name"
                className={`auth-input ${errors.fullName ? 'error' : ''}`}
                type="text"
                name="fullName"
                placeholder="John Doe"
                value={formData.fullName}
                onChange={handleChange}
                autoComplete="name"
              />
              {errors.fullName && <span className="auth-error">{errors.fullName}</span>}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-email">
                <span className="auth-label-icon">📧</span>
                Email Address
              </label>
              <input
                id="signup-email"
                className={`auth-input ${errors.email ? 'error' : ''}`}
                type="email"
                name="email"
                placeholder="you@example.com"
                value={formData.email}
                onChange={handleChange}
                autoComplete="email"
              />
              {errors.email && <span className="auth-error">{errors.email}</span>}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-password">
                <span className="auth-label-icon">🔒</span>
                Password
              </label>
              <div className="auth-password-wrapper">
                <input
                  id="signup-password"
                  className={`auth-input ${errors.password ? 'error' : ''}`}
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder="Min. 6 characters with a number"
                  value={formData.password}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? '🙈' : '👁️'}
                </button>
              </div>
              {formData.password && (
                <div style={{ marginTop: '6px' }}>
                  <div style={{
                    height: '4px',
                    borderRadius: '2px',
                    background: 'var(--bg-tertiary)',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${passwordStrength.level}%`,
                      background: passwordStrength.color,
                      borderRadius: '2px',
                      transition: 'width 0.3s ease, background 0.3s ease'
                    }} />
                  </div>
                  <span style={{
                    fontSize: '0.75rem',
                    color: passwordStrength.color,
                    fontWeight: 500
                  }}>
                    {passwordStrength.label}
                  </span>
                </div>
              )}
              {errors.password && <span className="auth-error">{errors.password}</span>}
            </div>

            <div className="auth-field">
              <label className="auth-label" htmlFor="signup-confirm">
                <span className="auth-label-icon">🔐</span>
                Confirm Password
              </label>
              <div className="auth-password-wrapper">
                <input
                  id="signup-confirm"
                  className={`auth-input ${errors.confirmPassword ? 'error' : ''}`}
                  type={showConfirm ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder="Re-enter your password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  autoComplete="new-password"
                />
                <button
                  type="button"
                  className="auth-password-toggle"
                  onClick={() => setShowConfirm(!showConfirm)}
                  aria-label={showConfirm ? 'Hide password' : 'Show password'}
                >
                  {showConfirm ? '🙈' : '👁️'}
                </button>
              </div>
              {errors.confirmPassword && <span className="auth-error">{errors.confirmPassword}</span>}
            </div>

            <button
              type="submit"
              className="auth-submit"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="auth-submit-spinner"></div>
                  Creating Account...
                </>
              ) : (
                'Create Account ⚡'
              )}
            </button>

            <div className="auth-divider">
              <div className="auth-divider-line"></div>
              <span className="auth-divider-text">or sign up with</span>
              <div className="auth-divider-line"></div>
            </div>

            <div className="auth-social-buttons">
              <button type="button" className="auth-social-btn">
                <span className="auth-social-icon">🔵</span>
                Google
              </button>
              <button type="button" className="auth-social-btn">
                <span className="auth-social-icon">⬛</span>
                GitHub
              </button>
            </div>
          </form>
        )}

        <div className="auth-footer">
          Already have an account?{' '}
          <button className="auth-footer-link" onClick={onSwitchToLogin}>
            Log In
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
