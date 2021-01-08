import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import { Link } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'config/prismic';

const SiteLink = ({ link, children, className }) => {
  if (link) {
    // Set link to be treated as text by default.
    let linkUrl = link;

    // If the link points to an internal Document, handle it with the NextLink
    if (link.link_type && link.link_type === 'Document') {
      linkUrl = Link.url(link, linkResolver);

      return (
        <NextLink as={linkUrl} href={Link.url(link, hrefResolver)}>
          <a className={className || null}>{children}</a>
        </NextLink>
      );
    }

    // If the item has a UID, use NextLink
    if (link.uid) {
      return (
        <NextLink as={linkResolver(link)} href={hrefResolver(link)}>
          <a className={className || null}>{children}</a>
        </NextLink>
      );
    }

    // If it's a non-plaintext link, get the url prop.
    if (link.link_type === 'Web') linkUrl = link.url;

    // Otherwise return a normal anchor element
    return (
      <a
        className={className || null}
        href={linkUrl}
        target={link.target ? '_blank' : null}
        rel={link.target ? 'noopener noreferrer' : null}>
        {children}
      </a>
    );
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
