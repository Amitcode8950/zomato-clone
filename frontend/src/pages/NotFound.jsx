import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/theme.css';
import '../styles/notfound.css';

const NotFound = () => {
  return (
    <div className="notfound-page">

      {/* Floating food particles */}
      <div className="notfound-particles">
        <span className="notfound-particle">🍕</span>
        <span className="notfound-particle">🍔</span>
        <span className="notfound-particle">🌮</span>
        <span className="notfound-particle">🍜</span>
        <span className="notfound-particle">🍩</span>
        <span className="notfound-particle">🥗</span>
        <span className="notfound-particle">🍣</span>
        <span className="notfound-particle">🧁</span>
        <span className="notfound-particle">🥘</span>
        <span className="notfound-particle">🍿</span>
      </div>

      {/* Main content */}
      <div className="notfound-content">

        {/* Animated 404 number */}
        <div className="notfound-plate">
          {/* Fork left */}
          <span className="notfound-fork notfound-fork--left">🍴</span>

          <div className="notfound-number">
            4
            <span className="notfound-zero">
              <span className="notfound-plate-ring">
                <span className="notfound-pulse-dot"></span>
              </span>
              0
            </span>
            4
          </div>

          {/* Fork right */}
          <span className="notfound-fork notfound-fork--right">🍴</span>
        </div>

        {/* Sad plate */}
        <span className="notfound-emoji">😔</span>

        {/* Text */}
        <h1 className="notfound-title">This plate is empty</h1>
        <p className="notfound-subtitle">
          The page you're looking for has been moved, deleted, or perhaps never existed.
          Let's get you back to something delicious.
        </p>

        {/* Action buttons */}
        <div className="notfound-actions">
          <Link to="/" className="notfound-btn notfound-btn--primary">
            <svg className="notfound-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to home
          </Link>
          <Link to="/user/login" className="notfound-btn notfound-btn--ghost">
            Sign in
            <svg className="notfound-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </Link>
        </div>

        {/* Search bar */}
        <div className="notfound-search">
          <div className="notfound-search-bar">
            <svg className="notfound-search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <input
              className="notfound-search-input"
              type="text"
              placeholder="Search for restaurants, cuisines..."
              id="notfound-search"
            />
          </div>
          <p className="notfound-search-hint">Try searching for what you were looking for</p>
        </div>

      </div>
    </div>
  );
};

export default NotFound;
