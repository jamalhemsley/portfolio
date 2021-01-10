import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Link } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'config/prismic';

const SiteLink = ({ link, children, className }) => {
  // Utilize `smoothscroll-polyfill` to enable smooth scrolling for Safari.
  const smoothScroll = (e) => {
    const element = e.currentTarget;
    const target = element.getAttribute('href');

    if (target[0] === '#') {
      e.preventDefault();

      document
        .getElementById(target.substring(1))
        .scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (link) {
    // Set link to be treated as text by default.
    let linkUrl = link;

    // If the link points to an internal Document, handle it with the NextLink
    if (link.link_type && link.link_type === 'Document') {
      linkUrl = Link.url(link, linkResolver);

      return (
        <NextLink
          as={linkUrl}
          href={Link.url(link, hrefResolver)}
          scroll={false}>
          <a className={className || null}>{children}</a>
        </NextLink>
      );
    }

    // If the item has a UID, use NextLink
    if (link.uid) {
      return (
        <NextLink
          as={linkResolver(link)}
          href={hrefResolver(link)}
          scroll={false}>
          <a className={className || null}>{children}</a>
        </NextLink>
      );
    }

    // If it's a non-plaintext link, get the url prop.
    if (link.link_type === 'Web') linkUrl = link.url;

    // Otherwise return a normal anchor element
    /* eslint-disable react/jsx-no-target-blank */
    return (
      <a
        className={className || null}
        href={linkUrl}
        target={link.target ? '_blank' : null}
        rel={link.target ? 'noopener noreferrer' : null}
        onClick={linkUrl[0] === '#' ? smoothScroll : null}>
        {children}
      </a>
    );
    /* eslint-enable react/jsx-no-target-blank */
  }

  return null;
};

SiteLink.propTypes = {
  link: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
};

SiteLink.defaultProps = {
  children: [],
  className: null,
};

export default SiteLink;
