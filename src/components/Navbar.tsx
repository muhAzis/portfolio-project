import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';
import ButtonCTA from './ButtonCTA';

const Navbar: React.FC = () => {
  const [yOffset, setYOffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYOffset(window.pageYOffset);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, [setYOffset]);

  const callToAction = (): void => {
    console.log('call to action');
  };

  const reduceScrolling = (): void => {
    // window.scroll(0, -1);
  };

  return (
    <nav id="Navbar" style={yOffset > 0 ? { backdropFilter: 'blur(10px)', boxShadow: 'var(--box-shadow-lite1)' } : {}}>
      <div className="navbar-container">
        <img src="/logo.png" alt="logo" className="logo-image" />
        <ul className="navbar-menu">
          <li>
            <a href="#Hero" onClick={reduceScrolling}>
              Home
            </a>
          </li>
          <li>
            <a href="#Services" onClick={reduceScrolling}>
              Services & Skills
            </a>
          </li>
          <li>
            <a href="#" onClick={reduceScrolling}>
              Projects
            </a>
          </li>
          <li className="special-item">
            <ButtonCTA action={callToAction} className="">
              Let's Connect.
            </ButtonCTA>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
