import { useState } from 'react';

function InputField({
  label,
  type = 'text',
  name,
  value,
  onChange,
  placeholder,
  error,
  icon,
  required = false,
  autoComplete
}) {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordField = type === 'password';
  const inputType = isPasswordField ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className={`form-field-group ${error ? 'has-error' : ''}`}>
      {label && (
        <label htmlFor={name} className="form-label">
          {label} {required && <span className="required-star">*</span>}
        </label>
      )}

      <div className="input-container">
        {icon && <span className="input-icon-left">{icon}</span>}

        <input
          id={name}
          name={name}
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`form-input ${icon ? 'has-left-icon' : ''} ${isPasswordField ? 'has-right-icon' : ''}`}
          autoComplete={autoComplete}
        />

        {isPasswordField && (
          <button
            type="button"
            className="input-icon-right toggle-password-btn"
            onClick={() => setShowPassword(prev => !prev)}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
            tabIndex={-1}
          >
            {showPassword ? '👁️' : '🔒'}
          </button>
        )}
      </div>

      {error && <span className="form-error-msg">{error}</span>}
    </div>
  );
}

export default InputField;
