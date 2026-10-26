import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import InputField from '../components/common/InputField';
import Toast from '../components/common/Toast';
import '../styles/Auth.css';

function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const validate = () => {
    const errs = {};
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format';
    }

    if (!formData.password) {
      errs.password = 'Password is required';
    } else if (formData.password.length < 6) {
      errs.password = 'Password must be at least 6 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    const result = await login({
      email: formData.email,
      password: formData.password,
      rememberMe
    });
    setIsLoading(false);

    if (result.success) {
      setToast({ message: `Welcome back, ${result.user.name}!`, type: 'success' });
      setTimeout(() => {
        navigate(from, { replace: true });
      }, 700);
    } else {
      setToast({ message: result.error, type: 'error' });
    }
  };

  const handleDemoFill = () => {
    setFormData({
      email: 'demo@futureforge.com',
      password: 'Password123!'
    });
    setErrors({});
  };

  return (
    <div className="auth-page">
      <div className="auth-bg" aria-hidden="true" />

      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">
            <span className="auth-logo-icon">⚡</span>
            <span className="auth-logo-text">Future Forge</span>
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to resume your career simulation journey</p>
        </div>

        <div style={{
          background: 'var(--bg-tertiary)',
          border: '1px dashed var(--accent-primary)',
          borderRadius: 'var(--radius-sm)',
          padding: '10px 14px',
          marginBottom: '20px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '0.82rem'
        }}>
          <div>
            <strong style={{ color: 'var(--accent-primary)' }}>Demo Account:</strong>
            <div style={{ color: 'var(--text-secondary)' }}>demo@futureforge.com / Password123!</div>
          </div>
          <button
            type="button"
            onClick={handleDemoFill}
            style={{
              background: 'var(--accent-gradient)',
              color: 'white',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              padding: '6px 12px',
              fontSize: '0.78rem',
              cursor: 'pointer',
              fontWeight: 600
            }}
          >
            Auto Fill
          </button>
        </div>

        <form onSubmit={handleSubmit} className="auth-form" noValidate>
          <InputField
            label="Email Address"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@example.com"
            error={errors.email}
            icon="✉️"
            required
            autoComplete="email"
          />

          <InputField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            error={errors.password}
            icon="🔑"
            required
            autoComplete="current-password"
          />

          <div className="auth-options">
            <label className="auth-remember">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <span>Remember me</span>
            </label>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
              Saved in localStorage
            </span>
          </div>

          <button
            type="submit"
            className="auth-submit-btn"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="auth-loading-text">
                <span className="auth-spinner"></span>
                Signing In...
              </span>
            ) : (
              'Sign In →'
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            Don't have an account yet?{' '}
            <Link to="/signup" className="auth-footer-link">
              Create an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
