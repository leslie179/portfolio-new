import React, { useState, useRef } from "react";

export default function MP3Player() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="mp3-player">
      <div className="cd-cover">
        <img
          src="path_to_your_album_cover.jpg"
          alt="Album Cover"
          className="album-image"
        />
      </div>
      <div className="controls">
        <button onClick={() => audioRef.current.currentTime -= 2}>
          ⏮
        </button>
        <button onClick={togglePlayPause}>
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button onClick={() => audioRef.current.currentTime += 10}>
          ⏭
        </button>
      </div>
      <audio ref={audioRef} src="/site-photos-wellness/testimonial.mp3" />
      <style jsx>{`
        .mp3-player {
          display: flex;
          align-items: center;
          justify-content: center;
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
      `}</style>
    </div>
  );
}
