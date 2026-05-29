import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/theme.css';
import '../../styles/auth.css';

const UserRegister = () => {
  const handleSubmit =(e)=>{
    e.preventDefault();
     
   
    const fullName = e.target.value;
    const email = e.target.value;
    const password = e.target.value;
    console.log(fullName,email,password);
    

   
        
    }
  
  return (
    <div className="auth-page">
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">
            <span className="auth-logo-icon">🍽</span>
            <span className="auth-logo-text">Zomato</span>
          </div>
          <h1 className="auth-title">Create account</h1>
          <p className="auth-subtitle">Join millions discovering great food</p>
        </div>

        {/* Form */}
        <form className="auth-form" onSubmit={(e) => e.preventDefault()}>
          {/* Name */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="user-first-name">Full name</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              <input
                id="user-first-name"
                className="auth-input"
                type="text"
                placeholder="John Doe"
              />
            </div>
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="user-reg-email">Email address</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
              </svg>
              <input
                id="user-reg-email"
                className="auth-input"
                type="email"
                placeholder="you@example.com"
              />
            </div>
          </div>

         

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label" htmlFor="user-reg-password">Password</label>
            <div className="auth-input-wrapper">
              <svg className="auth-input-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
              <input
                id="user-reg-password"
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

         
          {/* Submit */}
          <button type="submit" className="auth-submit" onClick={handleSubmit} >
            Create account
          </button>
        </form>

        {/* Footer */}
        <div className="auth-footer">
          Already have an account?{' '}
          <Link to="/user/login">Sign in</Link>
        </div> 
      </div>
    </div>
  );
};

export default UserRegister;
