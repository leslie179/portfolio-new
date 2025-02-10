import React, { useState, useRef, useEffect } from "react";

export default function MP3Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef(null);

  // Preload the audio when the component mounts
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.addEventListener("canplaythrough", handleLoaded);
    }
    return () => {
      if (audio) {
        audio.removeEventListener("canplaythrough", handleLoaded);
      }
    };
  }, []);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  const togglePlayPause = () => {
    if (!isLoaded) return; // Prevent playing if audio isn't loaded yet
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying((prev) => !prev);
  };

  return (
    <div className="mp3-player">
      <div className="cd-cover">
        <img
          src="path_to_your_album_cover.jpg" // Replace with your album cover path
          alt="Album Cover"
          className="album-image"
        />
      </div>
      <div className="controls">
        <button onClick={() => (audioRef.current.currentTime -= 10)} disabled={!isLoaded}>
          ⏮
        </button>
        <button onClick={togglePlayPause} disabled={!isLoaded}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={() => (audioRef.current.currentTime += 10)} disabled={!isLoaded}>
          ⏭
        </button>
      </div>
      <audio
        ref={audioRef}
        src="site-photos-wellness\testimonial.mp3" // Replace with your audio file path
        preload="auto"
        onCanPlayThrough={handleLoaded} // Triggered when audio is ready
      />
      <style jsx>{`
        .mp3-player {
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 16px;
          background: #eaeaea;
          border-radius: 16px;
          padding: 16px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .cd-cover {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          overflow: hidden;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        .album-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .controls {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .controls button {
          background: none;
          border: none;
          font-size: 1.5rem;
          color: #555;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .controls button:hover {
          color: #000;
        }
        .controls button:disabled {
          color: #aaa;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
}
