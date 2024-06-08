import React from 'react';

import { pageLinks, socialLinks } from '../data';
import SocialLinks from './SocialLinks';

import PageLinks from './PageLinks';

const Footer = () => {
  return (
    <footer className="section footer text-center p-x-2">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return (
            <SocialLinks key={link.id} {...link} itemClass="footer-icon" />
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Shankar Tours and Travels
        <span id="date">{new Date().getFullYear()}</span>all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
