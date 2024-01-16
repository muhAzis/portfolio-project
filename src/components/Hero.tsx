import React from 'react';
import '../styles/Hero.css';
import Marquee from 'react-fast-marquee';
import ButtonCTA from './ButtonCTA';

interface Props {}

const Hero: React.FC<Props> = () => {
  const callToAction = (): void => {
    console.log('call to action');
  };

  return (
    <div id="Hero">
      <div className="hero-container">
        <div className="col1 col">
          <img id="ProfilePict" src="/profile.png" alt="profile-picture" />
          <Marquee>
            <span className="profile-pict-running-text">Muhamad Abdul Azis</span>
          </Marquee>
        </div>
        <div className="col2 col">
          <div className="hero-name-texts">
            <span className="hero-name-text1">Hi, I'm</span>
            <span className="hero-name-text2">Muhamad</span>
            <span className="hero-name-text2">Abdul</span>
            <span className="hero-name-text2">Azis</span>
          </div>
          <div className="hero-about-texts">
            <h1 className="hero-about-text1">A bit of my back story...</h1>
            <p className="hero-about-text2">
              I graduated from an “almost” an IT major, a major that focused on digital electronics that requires coding. It builds my interest on programming much more than the electronics itself. So here I am ended up with programming
              skills and focusing on web development for the basic learning path. I also have some hobbies related to design and aesthetical objects that supports my interest to learn from web development.
            </p>
          </div>
          <ButtonCTA action={callToAction} className="bi bi-download" style={{ marginTop: '40px', alignSelf: 'flex-end' }}>
            Download as CV
          </ButtonCTA>
        </div>
      </div>
    </div>
  );
};

export default Hero;
