import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReelItem = ({ item }) => {
  const navigate = useNavigate();
  const partnerId = item.foodPartner?._id || item.foodPartner;
  const videoRef = useRef(null);
  const slideRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const slide = slideRef.current;
    const video = videoRef.current;
    if (!slide || !video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.55) {
          video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
        } else {
          video.pause();
          setPlaying(false);
        }
      },
      { threshold: [0, 0.55, 1] }
    );

    observer.observe(slide);
    return () => observer.disconnect();
  }, []);

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  };

  const handleViewProfile = (e) => {
    e.stopPropagation();
    if (partnerId) {
      navigate(`/partner/${partnerId}`);
    }
  };

  return (
    <article ref={slideRef} className="reel-slide">
      <video
        ref={videoRef}
        className="reel-video"
        src={item.video}
        loop
        playsInline
        muted={muted}
        preload="metadata"
        onClick={togglePlay}
      />

      <div className="reel-gradient" aria-hidden="true" />

      {!playing && (
        <div className="reel-play-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      )}

      <button
        type="button"
        className="reel-mute-btn"
        onClick={toggleMute}
        aria-label={muted ? 'Unmute' : 'Mute'}
      >
        {muted ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <line x1="23" y1="9" x2="17" y2="15" />
            <line x1="17" y1="9" x2="23" y2="15" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M11 5 6 9H2v6h4l5 4V5z" />
            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
          </svg>
        )}
      </button>

      <div className="reel-actions">
        <button
          type="button"
          className="reel-view-btn"
          onClick={handleViewProfile}
          disabled={!partnerId}
        >
          View
        </button>
      </div>

      <div className="reel-info">
        <h2 className="reel-name">{item.name}</h2>
        {item.foodPartner?.name && (
          <p className="reel-restaurant">{item.foodPartner.name}</p>
        )}
        <p className="reel-desc">{item.description}</p>
      </div>
    </article>
  );
};

export default ReelItem;
