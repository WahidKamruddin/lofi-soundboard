import React, { useState, useRef } from 'react';

const SoundButton = ({ soundSrc, label, isPaused}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handleButtonClick = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleVolumeChange = (event) => {
    audioRef.current.volume = event.target.value;
  };

  return (
    <div className="sound-button">
      <button className="round-button" onClick={handleButtonClick}>
        <div>{label}</div>
        <br></br>
        {isPlaying ? '| |' : '▶'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        defaultValue="0.5"
        onChange={handleVolumeChange}
        className='slider'
      />
      <audio ref={audioRef}>
        <source src={soundSrc} type="audio/mpeg" />
      </audio>
    </div>
  );
};

export default SoundButton;