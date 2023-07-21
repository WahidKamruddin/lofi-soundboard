import React from 'react';
import SoundButton from './SoundButton';

const soundData = [
  { id: 1, soundSrc: 'jazz.mp3', label: 'Jazz' },
  { id: 2, soundSrc: 'rain.mp3', label: 'Rain' },
  { id: 3, soundSrc: 'chatter.mp3', label: 'Chatter' },
  { id: 4, soundSrc: 'fireplace.mp3', label: 'Fireplace' },

  
];


const Soundboard = () => {
  const handleMasterPause = () => {
    const audioElements = document.getElementsByTagName('audio');
    for (let i = 0; i < audioElements.length; i++) {
      if (!audioElements[i].paused) {
        audioElements[i].pause();
      }
    }
  };

  return (
    <div>
      <center>
        <h1>MellowMind</h1>
        <h2>Lo-Fi Music Soundboard</h2>
      </center>
    
      <div className="soundboard-container">
        <div className="soundboard">
          <div className="sound-buttons">
            {soundData.map((sound) => (
              <SoundButton key={sound.id} soundSrc={sound.soundSrc} label={sound.label} />
            ))}
          </div>
          <button className="master-pause" onClick={handleMasterPause}>
            Pause All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Soundboard;
