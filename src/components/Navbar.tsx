import React, { useState } from 'react';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('home');

  return (
    <nav id="Navbar">
      <img src="" alt="" />
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
        <li className="special-item">Let's connect</li>
      </ul>
    </nav>
  );
};

export default Navbar;
