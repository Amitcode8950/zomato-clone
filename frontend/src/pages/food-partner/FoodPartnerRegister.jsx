import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';

const FoodPartnerRegister = () => {
  return (
    <div className="auth-page">
      <div className="auth-card auth-card--partner">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">
            <span className="auth-logo-icon">🏪</span>
            <span className="auth-logo-text">Zomato Partner</span>
          </div>
          <h1 className="auth-title">Register your restaurant</h1>
          <p className="auth-subtitle">Reach millions of hungry customers</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {/* Restaurant name */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-restaurant-name">Restaurant name</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 3h18v18H3z" />
                <path d="M9 3v18" />
                <path d="M3 9h6" />
              </svg>
              <input
                id="partner-restaurant-name"
                className="auth-input"
                type="text"
                placeholder="Your restaurant name"
              />
            </div>
          </div>

          {/* Owner name */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-owner-name">Owner full name</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                id="partner-owner-name"
                className="auth-input"
                type="text"
                placeholder="Full name"
              />
            </div>
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-reg-email">Business email</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                id="partner-reg-email"
                className="auth-input"
                type="email"
                placeholder="business@example.com"
              />
            </div>
          </div>

          {/* Phone */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-reg-phone">Phone number</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <input
                id="partner-reg-phone"
                className="auth-input"
                type="tel"
                placeholder="+91 98765 43210"
              />
            </div>
          </div>

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="partner-reg-password">Password</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="partner-reg-password"
                className="auth-input"
                type="password"
                placeholder="Create a strong password"
              />
              <button type="button" className="auth-password-toggle" aria-label="Toggle password visibility">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </button>
            </div>
          </div>

          {/* Terms */}
          

          {/* Submit */}
          <button type="submit" className="auth-submit">
            Register restaurant
          </button>
        </form>

        {/* Footer */}
        <div className="auth-footer">
          Already a partner?{' '}
          <Link to="/food-partner/login">Sign in</Link>
        </div> 
      </div>
    </div>
  );
};

export default FoodPartnerRegister;
