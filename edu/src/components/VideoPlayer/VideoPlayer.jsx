import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/jesravideo.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  // Auto-play video when playState is true
  useEffect(() => {
    if (playState && videoRef.current) {
      videoRef.current.play();
    }
  }, [playState]);

  // Close video if clicked outside video-container
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (playerRef.current && !playerRef.current.contains(event.target)) {
        handleClose();
      }
    };

    if (playState) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [playState]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setPlayState(false);
  };

  return (
    <div className={`video-player ${playState ? 'show' : 'hide'}`}>
      <button className="close-btn" onClick={handleClose}>X</button>
      <div className={`video-container ${playState ? 'zoom-in' : 'zoom-out'}`} ref={playerRef}>
        <video 
          ref={videoRef}
          src={video}
          muted
          controls
          playsInline
        />
      </div>
    </div>
  );
};

export default VideoPlayer;
