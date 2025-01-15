import React from 'react';
import '../Stylesheet/HeroSection.css';
import background from '../assets/wallpaper.webp';

function HeroSection() {
  return (
    <>
     <div className="hero-section" style={{ backgroundImage: `url(${background})` }}>
      <div className="hero-overlay" />
    </div>
    </>
  );
}

export default HeroSection;
