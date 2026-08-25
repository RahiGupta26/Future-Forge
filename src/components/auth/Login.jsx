import { useState } from 'react'
import '../../styles/Auth.css'

function Login({ onLogin, onSwitchToSignUp }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }

    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
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

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validate()) return

    setIsLoading(true)

    // Simulate login
    setTimeout(() => {
      setIsLoading(false)
      const userData = {
        name: formData.email.split('@')[0],
        email: formData.email,
        avatar: '👤'
      }
      if (rememberMe) {
        localStorage.setItem('futureforge-user', JSON.stringify(userData))
      }
      onLogin(userData)
    }, 1500)
  }

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
          <h1 className="auth-title">Welcome Back</h1>
          <p className="auth-subtitle">Log in to continue your career journey</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label className="auth-label" htmlFor="login-email">
              <span className="auth-label-icon">📧</span>
              Email Address
            </label>
            <input
              id="login-email"
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
            <label className="auth-label" htmlFor="login-password">
              <span className="auth-label-icon">🔒</span>
              Password
            </label>
            <div className="auth-password-wrapper">
              <input
                id="login-password"
                className={`auth-input ${errors.password ? 'error' : ''}`}
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                autoComplete="current-password"
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
            {errors.password && <span className="auth-error">{errors.password}</span>}
          </div>

          <div className="auth-options">
            <label className="auth-remember">
              <input
                type="checkbox"
                className="auth-checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span className="auth-remember-text">Remember me</span>
            </label>
            <button type="button" className="auth-forgot">
              Forgot Password?
            </button>
          </div>

          <button
            type="submit"
            className="auth-submit"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="auth-submit-spinner"></div>
                Logging in...
              </>
            ) : (
              'Log In →'
            )}
          </button>

          <div className="auth-divider">
            <div className="auth-divider-line"></div>
            <span className="auth-divider-text">or continue with</span>
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

        <div className="auth-footer">
          Don&apos;t have an account?{' '}
          <button className="auth-footer-link" onClick={onSwitchToSignUp}>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
