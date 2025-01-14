import React from 'react';
import '../Stylesheet/HeroSection.css';
import background from '../assets/wallpaper.webp';

function HeroSection() {
  return (
    <>
     <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-overlay">
        <h1>Win this Summer</h1>
        <p>Share your summer snaps for your chance to win, find out more</p>
      </div>
    </div>
    </>
  );
}

export default HeroSection;
