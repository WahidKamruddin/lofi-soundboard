import React from 'react';
import Navbar from './components/Navbar';
import SoundBoard from './components/SoundBoard';

const App = () => {

  const videoFile = "sleepingcat.mp4#t=30";
  
  return (
    <div>
      
      <Navbar />
      <div className="video-background">
        <video autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
        </video></div>
      <SoundBoard />

      

    </div>
  );
};

export default App;
