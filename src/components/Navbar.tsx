import React, { useEffect, useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('home');
  const [yOffset, setYOffset] = useState<number>(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setYOffset(window.pageYOffset);
    });

    return () => window.removeEventListener('scroll', () => {});
  }, [setYOffset]);

  return (
    <nav id="Navbar" style={yOffset > 0 ? { backdropFilter: 'blur(10px)', boxShadow: 'var(--box-shadow-lite1)' } : {}}>
      <div className="navbar-container">
        <img src="/logo.png" alt="logo" className="logo-image" />
        <ul className="navbar-menu">
          <li>
            <a href="#" className={activeMenu === 'home' ? 'menu-active' : ''} onClick={() => setActiveMenu('home')}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={activeMenu === 'service' ? 'menu-active' : ''} onClick={() => setActiveMenu('service')}>
              Services & Skills
            </a>
          </li>
          <li>
            <a href="#" className={activeMenu === 'project' ? 'menu-active' : ''} onClick={() => setActiveMenu('project')}>
              Projects
            </a>
          </li>
          <li>
            <a href="#" className={activeMenu === 'contact' ? 'menu-active' : ''} onClick={() => setActiveMenu('contact')}>
              Contact
            </a>
          </li>
          <li className="special-item">Let's Connect.</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
