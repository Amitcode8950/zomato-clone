import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ReelItem from '../../components/ReelItem';
import { logoutUser } from '../../services/authService';
import { getFoodItems } from '../../services/foodService';
import '../../styles/theme.css';
import '../../styles/auth.css';
import '../../styles/reels.css';

const UserFoodFeed = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const res = await getFoodItems();
        setFoods(res.data.food || []);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate('/user/login');
          return;
        }
        setError(err.response?.data?.message || 'Failed to load food items.');
      } finally {
        setLoading(false);
      }
    };
    fetchFoods();
  }, [navigate]);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } finally {
      navigate('/');
    }
  };

  return (
    <div className="reels-page">
      <header className="reels-header">
        <Link to="/" className="reels-header-brand">Zomato</Link>
        <span className="reels-header-title">Reels</span>
        <button type="button" className="reels-header-logout" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {error && (
        <div className="reels-state">
          <p className="auth-alert auth-alert--error">{error}</p>
        </div>
      )}

      {loading && (
        <div className="reels-state">
          <p className="reels-loading">Loading reels...</p>
        </div>
      )}

      {!loading && !error && foods.length === 0 && (
        <div className="reels-state">
          <p className="reels-empty">No reels yet. Partners can upload food videos!</p>
          <Link to="/" className="reels-back-link">Back to home</Link>
        </div>
      )}

      {!loading && foods.length > 0 && (
        <div className="reels-viewport">
          <div className="reels-feed">
            {foods.map((item) => (
              <ReelItem key={item._id} item={item} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserFoodFeed;
