import React from 'react';
import PropTypes from 'prop-types';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { renderText } from 'utils/content';

const LazyImage = ({ refContainer, src, alt }) => {
  if (refContainer) {
    const container = refContainer;

    const beforeLoadLazyImage = () => {
      container.current.classList.add('img-lazy-load', 'is-loading');
    };

    const afterLoadLazyImage = () => {
      container.current.classList.remove('is-loading');
    };

    return (
      <LazyLoadImage
        src={src || ''}
        alt={renderText(alt, true) || ''}
        beforeLoad={beforeLoadLazyImage}
        afterLoad={afterLoadLazyImage}
      />
    );
  }

  return null;
};

LazyImage.propTypes = {
  refContainer: PropTypes.shape({}).isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

LazyImage.defaultProps = {
  alt: '',
};

export default LazyImage;
