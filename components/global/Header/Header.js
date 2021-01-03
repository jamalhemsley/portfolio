import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { textFormat } from 'utils';
import { SiteLink } from 'components/standard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

export const Header = ({ menu, socialProfiles }) => {
  return (
    <header className={styles.Header}>
      <div className='container'>
        <div className={styles.Header__inner}>
          <div className='row'>
            <div className='col-3 col-md-2 d-flex align-items-center'>
              <a href='/' className={styles.Header__brand}>
                <Image
                  src='/logo.svg'
                  alt='Digital Heat Logo'
                  height='85'
                  width='67'
                  quality='100'
                />
              </a>
            </div>
            <div className='col-11 offset-2 offset-md-3 col-lg-12 offset-lg-2 d-flex align-items-center justify-content-end'>
              <Nav menu={menu} socialProfiles={socialProfiles} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const Nav = ({ menu, socialProfiles }) => (
  <nav
    className={styles.Header__nav}
    role='navigation'
    aria-label='Main Navigation'>
    <MenuLinks menu={menu} />
    <SocialLinks socialProfiles={socialProfiles} />
  </nav>
);

const MenuLinks = ({ menu }) => {
  // Initialize the router.
  const router = useRouter();

  if (menu) {
    return (
      <ul className={styles['Header__nav-list']}>
        {menu.map((menuLink, index) => {
          const linkHref = Link.url(menuLink.link, linkResolver);
          let isActive = false;

          // If the current path is equal to the link path set it to current.
          if (router.pathname === linkHref) {
            isActive = true;
          }

          // If it's a derivative of the homepage (work) set to current.
          if (linkHref === '/' && router.pathname === '/work/[uid]') {
            isActive = true;
          }

          return (
            <li
              key={`menulink-${index}`}
              className={styles['Header__nav-item']}>
              <MenuLink
                menuLink={menuLink}
                linkClass={`${styles['Header__nav-link']} ${
                  isActive ? styles['Header__nav-link--is-active'] : null
                }`}
              />
            </li>
          );
        })}
      </ul>
    );
  }

  return null;
};

const MenuLink = ({ menuLink, linkClass }) => (
  <SiteLink link={menuLink.link} linkClass={linkClass} detectActive={true}>
    {textFormat(menuLink.label)}
  </SiteLink>
);

const SocialLinks = ({ socialProfiles }) => {
  if (socialProfiles) {
    const socialItems = [];
    const socialLinks = [];

    socialProfiles.map((socialLink) => socialItems.push(socialLink));

    for (const socialItem of socialItems) {
      if (socialItem.type === 'Email') {
        socialLinks.push(
          <li key='social-email' className={styles['Header__nav-item']}>
            <a
              href={`mailto:${socialItem.name}`}
              target='_blank'
              rel='noopener'
              className={`${styles['Header__nav-link']} ${styles['Header__nav-link--icon']}`}>
              <FontAwesomeIcon icon={faPaperPlane} size='lg' />
            </a>
          </li>
        );
      }

      if (socialItem.type === 'Github') {
        socialLinks.push(
          <li key='social-github' className={styles['Header__nav-item']}>
            <a
              href={`https://github.com/${socialItem.name}`}
              target='_blank'
              rel='noopener'
              className={`${styles['Header__nav-link']} ${styles['Header__nav-link--icon']}`}>
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
          </li>
        );
      }
    }

    return <ul className={styles['Header__nav-list']}>{socialLinks}</ul>;
  }

  return null;
};

Header.propTypes = {
  menu: PropTypes.array,
  socialProfiles: PropTypes.array,
};

export default Header;
