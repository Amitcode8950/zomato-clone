import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { logoutFoodPartner } from '../../services/authService';
import '../../styles/theme.css';
import '../../styles/food.css';

const PartnerDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutFoodPartner();
    } finally {
      navigate('/');
    }
  };

  return (
    <div className="food-page">
      <Navbar variant="partner" onLogout={handleLogout} />
      <main className="food-main">
        <div className="food-header">
          <h1 className="food-title">Partner dashboard</h1>
          <p className="food-subtitle">Manage your restaurant and upload food videos</p>
        </div>

        <div className="food-dashboard-actions">
          <Link to="/food-partner/create-food" className="food-dashboard-btn food-dashboard-btn--primary">
            + Add new food item
          </Link>
          <Link to="/" className="food-dashboard-btn food-dashboard-btn--ghost">
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
};

export default PartnerDashboard;
