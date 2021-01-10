import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'prismic-reactjs';
import { motion } from 'framer-motion';
import { linkResolver } from 'config/prismic';
import { renderText } from 'utils/content';
import { SiteLink } from 'components/common';
import { Logo } from 'components/icons';

import animations from './animations';
// import styles from './Header.module.scss';

const Header = ({ siteTitle, menu, social, currentUid }) => {
  // Add class trigger for sticky header.
  const headerEl = useRef(null);

  const toggleMobileNav = (e) => {
    headerEl.current.classList.toggle('isExpanded');

    e.preventDefault();
    e.currentTarget.classList.toggle('isActive');
  };

  useEffect(() => {
    // Sticky Header Observer
    const observer = new IntersectionObserver(
      ([e]) => e.target.classList.toggle('isSticky', e.intersectionRatio < 1),
      { threshold: [1] }
    );

    if (headerEl.current) {
      observer.observe(headerEl.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [headerEl]);

  // Get the home page for the brand link.
  let homeLink = null;

  if (menu) {
    [homeLink] = menu.filter((menuLink) => menuLink.link.type === 'home');
    homeLink = homeLink.link;
  }

  return (
    <motion.header
      ref={headerEl}
      id="header"
      className="Header"
      variants={animations.Header}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-7 d-flex align-items-center">
            <button
              className="btn Header__navToggle"
              onClick={toggleMobileNav}
              type="button">
              <span />
              <span />
            </button>
            <Nav menuLinks={menu} uid={currentUid} />
          </div>
          <div className="col-4 col-md-2 offset-md-0 d-flex align-items-center justify-content-center">
            <SiteLink link={homeLink || '/'} className="Header__brand">
              <Logo title={siteTitle} className="icon" />
            </SiteLink>
          </div>
          <div className="col-6 col-md-7 d-flex align-items-center justify-content-end">
            <Nav socialLinks={social} />
          </div>
        </div>
      </div>
    </motion.header>
  );
};

Header.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({})),
  social: PropTypes.arrayOf(PropTypes.shape({})),
  siteTitle: PropTypes.string,
  currentUid: PropTypes.string,
};

Header.defaultProps = {
  menu: [],
  social: [],
  siteTitle: '',
  currentUid: '',
};

const Nav = ({ menuLinks, socialLinks, uid }) => {
  if (menuLinks) return <MenuLinks links={menuLinks} uid={uid} />;

  if (socialLinks)
    return (
      <nav className="Header__nav" aria-label="Social Links">
        <SocialLinks links={socialLinks} />
      </nav>
    );

  return null;
};

Nav.propTypes = {
  menuLinks: PropTypes.arrayOf(PropTypes.shape({})),
  socialLinks: PropTypes.arrayOf(PropTypes.shape({})),
  uid: PropTypes.string,
};

Nav.defaultProps = {
  menuLinks: null,
  socialLinks: null,
  uid: '',
};

const MenuLinks = ({ links, uid }) => {
  // Initialize the router.
  const router = useRouter();

  if (links)
    return (
      <nav
        className="Header__nav Header__nav___primary"
        role="navigation"
        aria-label="Main Navigation">
        <ul className="Header__navList">
          {links.map((link, index) => {
            const itemKey = `menuItem-${index}`;
            const linkHref = Link.url(link.link, linkResolver);
            let isActive = false;

            // If the current path is equal to the link path set it to current.
            if (router.pathname === linkHref || `/${uid}` === linkHref) {
              isActive = true;
            }

            // If it's a derivative of the homepage (work) set to current.
            if (linkHref === '/' && router.pathname === '/work/[uid]') {
              isActive = true;
            }

            return (
              <li
                key={itemKey}
                className="Header__navItem"
                style={{ '--index': index }}>
                <SiteLink
                  link={link.link}
                  className={`Header__navLink ${isActive ? 'isActive' : null}`}>
                  {renderText(link.label, true)}
                </SiteLink>
              </li>
            );
          })}
        </ul>
      </nav>
    );

  return null;
};

MenuLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  uid: PropTypes.string,
};

MenuLinks.defaultProps = {
  uid: '',
};

/**
 * @todo Rename this function to something more relevant as it doesn't handle links.
 */
const SocialLinks = ({ links }) => {
  if (links)
    return (
      <ul className="Header__navList">
        {links.map((link, index) => {
          const itemKey = `socialItem-${index}`;

          switch (link.type) {
            case 'Email':
              return (
                <li key={itemKey} className="Header__navItem">
                  <SiteLink
                    link={`mailto:${link.name}&subject="Hello! Let's Work Together."`}
                    className="Header__navLink Header__navLink___hasIcon">
                    <span className="text-visually-hidden">Email</span>
                    <FontAwesomeIcon icon="paper-plane" size="lg" />
                  </SiteLink>
                </li>
              );

            case 'Github':
              return (
                <li key={itemKey} className="Header__navItem">
                  <SiteLink
                    link={`https://github.com/${link.name}`}
                    className="Header__navLink Header__navLink___hasIcon">
                    <span className="text-visually-hidden">Github</span>
                    <FontAwesomeIcon icon={['fab', 'github']} size="lg" />
                  </SiteLink>
                </li>
              );

            default:
              return null;
          }
        })}
      </ul>
    );

  return null;
};

SocialLinks.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Header;
