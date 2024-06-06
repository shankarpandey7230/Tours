import logo from '../assets/images/logo.png';
import React from 'react';
import '../index.css';
import { pageLinks, socialLinks } from '../data.js';
import PageLinks from './PageLinks';
import SocialLinks from './SocialLinks';

const NavBar = () => {
  return (
    <nav className="navbar w-100 d-flex align-items-center shadow-lg bg-white z-2">
      <div
        className="nav-center mx-auto"
        style={{ width: '90vw', 'max-width': '1170px' }}
      >
        <div className="nav-header d-flex justify-content-between align-items-center">
          <img
            src={logo}
            alt="logo"
            style={{ width: '100px', height: '50px' }}
          />
          <button
            className="nav-toggle bg-transparent text-dark"
            id="nav-toggle"
          >
            <i class="fa-solid fa-bars"></i>
          </button>
        </div>
        <PageLinks parentClass="nav-links d-flex  " itemClass="nav-link fs-1" />

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return <SocialLinks {...link} key={link.id} itemClass="nav-icon" />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
