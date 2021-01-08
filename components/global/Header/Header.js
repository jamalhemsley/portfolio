import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import { Link } from 'prismic-reactjs';
import { linkResolver } from 'config/prismic';
import { renderText } from 'utils/content';
import { SiteLink } from 'components/common';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane, faBars } from '@fortawesome/free-solid-svg-icons';
import { Logo } from 'components/icons';

import styles from './Header.module.scss';

const Header = ({ siteTitle, menu, social, currentUid }) => {
  // Add class trigger for sticky header.
  const headerEl = useRef(null);

  const toggleMobileNav = (e) => {
    headerEl.current.classList.toggle(styles.isExpanded);

    e.preventDefault();
    e.currentTarget.classList.toggle(styles.isActive);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([e]) =>
        e.target.classList.toggle(styles.isSticky, e.intersectionRatio < 1),
      { threshold: [1] }
    );

    if (headerEl.current) {
      observer.observe(headerEl.current);
    }

    return () => observer.disconnect();
  }, [headerEl]);

  return (
    <header ref={headerEl} id="header" className={styles.Header}>
      <div className="container">
        <div className="row">
          <div className="col-6 col-md-7 d-flex align-items-center">
            <nav
              className={`${styles.Header__nav} ${styles.Header__nav___primary}`}
              role="navigation"
              aria-label="Main Navigation">
              <button
                className={`btn ${styles.Header__toggle}`}
                onClick={toggleMobileNav}
                type="button">
                <span />
                <span />
              </button>
              <Nav menuLinks={menu} uid={currentUid} />
            </nav>
          </div>
          <div className="col-4 col-md-2 offset-md-0 d-flex align-items-center justify-content-center">
            <a href="/" className={styles.Header__brand}>
              <Logo title={siteTitle} className={styles.icon} />
            </a>
          </div>
          <div className="col-6 col-md-7 d-flex align-items-center justify-content-end">
            <Nav socialLinks={social} />
          </div>
        </div>
      </div>
    </header>
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
      <nav className={styles.Header__nav} aria-label="Social Links">
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
      <ul className={styles.Header__navList}>
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
            <li key={itemKey} className={styles.Header__navItem}>
              <SiteLink
                link={link.link}
                className={`${styles.Header__navLink} ${
                  isActive ? styles.isActive : null
                }`}>
                {renderText(link.label, true)}
              </SiteLink>
            </li>
          );
        })}
      </ul>
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
      <ul className={styles.Header__navList}>
        {links.map((link, index) => {
          const itemKey = `socialItem-${index}`;

          switch (link.type) {
            case 'Email':
              return (
                <li key={itemKey} className={styles.Header__navItem}>
                  <SiteLink
                    link={`mailto:${link.name}&subject="Hello! Let's Work Together."`}
                    className={`${styles.Header__navLink} ${styles.Header__navLink___hasIcon}`}>
                    <span className="text-visually-hidden">Email</span>
                    <FontAwesomeIcon icon={faPaperPlane} size="lg" />
                  </SiteLink>
                </li>
              );

            case 'Github':
              return (
                <li key={itemKey} className={styles.Header__navItem}>
                  <SiteLink
                    link={`https://github.com/${link.name}`}
                    className={`${styles.Header__navLink} ${styles.Header__navLink___hasIcon}`}>
                    <span className="text-visually-hidden">Github</span>
                    <FontAwesomeIcon icon={faGithub} size="lg" />
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
