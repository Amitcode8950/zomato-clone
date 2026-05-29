import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/theme.css';
import '../styles/home.css';

const Home = () => {
  return (
    <div className="home-page">
      <div className="home-content">
        <div className="home-header">
          <div className="home-logo">
            <span className="home-logo-icon">🍽</span>
            <span className="home-logo-text">Zomato</span>
          </div>
          <h1 className="home-title">Welcome to Zomato</h1>
          <p className="home-subtitle">
            Order food from your favourite restaurants or grow your business as a partner.
          </p>
        </div>

        <div className="home-options">
          <Link to="/user/register" className="home-option home-option--user">
            <span className="home-option-icon">👤</span>
            <div className="home-option-text">
              <span className="home-option-title">Register as User</span>
              <span className="home-option-desc">Create an account to order food</span>
            </div>
            <svg className="home-option-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>

          <Link to="/food-partner/register" className="home-option home-option--partner">
            <span className="home-option-icon">🏪</span>
            <div className="home-option-text">
              <span className="home-option-title">Register as Partner</span>
              <span className="home-option-desc">List your restaurant on Zomato</span>
            </div>
            <svg className="home-option-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className="home-options" style={{ marginTop: '1rem' }}>
          <Link to="/user/food" className="home-option home-option--user">
            <span className="home-option-icon">🍕</span>
            <div className="home-option-text">
              <span className="home-option-title">Browse food</span>
              <span className="home-option-desc">View dishes from restaurants (sign in required)</span>
            </div>
            <svg className="home-option-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        <div className="home-signin">
          <p>
            Already have an account?{' '}
            <Link to="/user/login">User sign in</Link>
            <span className="home-signin-sep">·</span>
            <Link to="/food-partner/login" className="home-signin-partner">Partner sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
