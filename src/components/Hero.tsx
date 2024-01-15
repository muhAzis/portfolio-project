import React from 'react';
import '../styles/Hero.css';

interface Props {}

const Hero: React.FC<Props> = () => {
  return (
    <div id="Hero">
      <div className="hero-container">
        <div className="col1 col"></div>
        <div className="col2 col"></div>
      </div>
    </div>
  );
};

export default Hero;
