import React from 'react';
import { Elements } from 'prismic-reactjs';
import smartquotes from 'smartquotes';
import { linkResolver } from 'config/prismic';

// Add unique key to props.
const propsWithUniqueKey = function (props, key) {
  return Object.assign(props || {}, { key });
};

// HTML serializer to customize Prismic RichText output.
const renderHtml = (type, element, content, children, key) => {
  let props = {};

  /* eslint-disable no-param-reassign */
  // Loop through arrays to convert quotes in strings to smart quotes.
  children.forEach((child, index) => {
    if (typeof child[0] === 'string')
      children[index][0] = smartquotes(child[0]);

    // Handle elements containing <span> tags.
    if (
      typeof child === 'object' &&
      Object.prototype.toString.call(child) === '[object Object]' &&
      child.type === 'span'
    ) {
      child.props.children.forEach((subChild, subIndex) => {
        if (typeof subChild[0] === 'string')
          child.props.children[subIndex][0] = smartquotes(subChild[0]);
      });
    }
  });
  /* eslint-enable no-param-reassign */

  switch (type) {
    case Elements.hyperlink: {
      // Utilize `smoothscroll-polyfill` to enable smooth scrolling for Safari.
      const smoothScroll = (e) => {
        const target = e.currentTarget.getAttribute('href');

        if (target[0] === '#') {
          e.preventDefault();

          document
            .getElementById(target.substring(1))
            .scrollIntoView({ behavior: 'smooth' });
        }
      };

      const hrefAttr = {
        href: element.data.url || linkResolver(element.data),
      };

      if (hrefAttr.href.includes('//#')) {
        const scrollTarget = hrefAttr.href.split('#')[1];

        hrefAttr.href = `#${scrollTarget}`;
        hrefAttr.onClick = (e) => smoothScroll(e);
      }

      const targetAttr = element.data.target
        ? { target: element.data.target }
        : {};
      const relAttr = element.data.target ? { rel: 'noopener' } : {};

      props = {
        ...hrefAttr,
        ...targetAttr,
        ...relAttr,
      };

      return React.createElement('a', propsWithUniqueKey(props, key), children);
    }

    default:
      return null;
  }
};

export default renderHtml;
