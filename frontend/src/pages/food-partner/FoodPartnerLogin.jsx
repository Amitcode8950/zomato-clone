import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginFoodPartner } from '../../services/authService';
import '../../styles/theme.css';
import '../../styles/auth.css';

const FoodPartnerLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const formData = new FormData(e.target);
    const payload = {
      email: formData.get('email'),
      password: formData.get('password'),
    };

    try {
      await loginFoodPartner(payload);
      navigate('/food-partner/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card auth-card--partner">
        <div className="auth-header">
          <div className="auth-logo">
            <span className="auth-logo-icon">🏪</span>
            <span className="auth-logo-text">Zomato Partner</span>
          </div>
          <h1 className="auth-title">Partner sign in</h1>
          <p className="auth-subtitle">Manage your restaurant dashboard</p>
        </div>

        {error && <p className="auth-alert auth-alert--error">{error}</p>}

        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-login-email">Business email</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                id="partner-login-email"
                name="email"
                className="auth-input"
                type="email"
                placeholder="business@example.com"
                required
              />
            </div>
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-login-password">Password</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="partner-login-password"
                name="password"
                className="auth-input"
                type="password"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-submit" disabled={loading}>
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="auth-footer">
          New partner?{' '}
          <Link to="/food-partner/register">Register your restaurant</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodPartnerLogin;
