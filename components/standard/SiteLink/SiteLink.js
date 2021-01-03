import React from 'react';
import PropTypes from 'prop-types';
import { default as NextLink } from 'next/link';
import { Link } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'prismic-configuration';

const SiteLink = ({ children, link, linkClass }) => {
  if (link) {
    const linkUrl = Link.url(link, linkResolver);
    let isBlank = false;

    if (link.target === '_blank') {
      isBlank = true;
    }

    // If the link is an internal link, then return a NextLink
    if (link.link_type && link.link_type === 'Document') {
      return (
        <NextLink as={linkUrl} href={Link.url(link, hrefResolver)}>
          <a className={linkClass}>{children}</a>
        </NextLink>
      );
    }

    // Otherwise return a normal anchor element
    return (
      <a
        className={linkClass}
        href={linkUrl}
        target={isBlank ? '_blank' : null}
        rel={isBlank ? 'noopener' : null}>
        {children}
      </a>
    );
  }

  return null;
};

SiteLink.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]).isRequired,
  linkClass: PropTypes.string,
};

export default SiteLink;
