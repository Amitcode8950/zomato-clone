import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getPartnerProfile } from '../../services/foodService';
import '../../styles/theme.css';
import '../../styles/auth.css';
import '../../styles/profile.css';

const PartnerProfile = () => {
  const { partnerId } = useParams();
  const navigate = useNavigate();
  const [partner, setPartner] = useState(null);
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await getPartnerProfile(partnerId);
        setPartner(res.data.partner);
        setFoods(res.data.food || []);
      } catch (err) {
        if (err.response?.status === 401) {
          navigate('/user/login');
          return;
        }
        setError(err.response?.data?.message || 'Failed to load profile.');
      } finally {
        setLoading(false);
      }
    };
    fetchProfile();
  }, [partnerId, navigate]);

  return (
    <div className="profile-page">
      <header className="profile-header">
        <Link to="/user/food" className="profile-back">
          ← Back to reels
        </Link>
      </header>

      <main className="profile-main">
        {loading && <p className="profile-loading">Loading profile...</p>}

        {error && <p className="auth-alert auth-alert--error">{error}</p>}

        {!loading && partner && (
          <>
            <section className="profile-card">
              <div className="profile-avatar">🏪</div>
              <h1 className="profile-name">{partner.name}</h1>
              {partner.contactName && (
                <p className="profile-meta">Contact: {partner.contactName}</p>
              )}
              {partner.phonenumber && (
                <p className="profile-meta">{partner.phonenumber}</p>
              )}
              {partner.address && (
                <p className="profile-address">{partner.address}</p>
              )}
              <p className="profile-count">{foods.length} food {foods.length === 1 ? 'item' : 'items'} listed</p>
            </section>

            <h2 className="profile-section-title">Menu</h2>

            {foods.length === 0 ? (
              <p className="profile-empty">No food listed yet.</p>
            ) : (
              <div className="profile-food-grid">
                {foods.map((item) => (
                  <article key={item._id} className="profile-food-card">
                    <video
                      className="profile-food-video"
                      src={item.video}
                      muted
                      playsInline
                      preload="metadata"
                      onMouseEnter={(e) => e.target.play().catch(() => {})}
                      onMouseLeave={(e) => {
                        e.target.pause();
                        e.target.currentTime = 0;
                      }}
                    />
                    <div className="profile-food-info">
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default PartnerProfile;
