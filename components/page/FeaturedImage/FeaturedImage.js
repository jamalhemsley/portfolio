import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

const FeaturedImage = ({ image, className }) => {
  const {
    alt,
    xs,
    xs_2x: xs2x,
    sm,
    sm_2x: sm2x,
    md,
    md_2x: md2x,
    lg,
    lg_2x: lg2x,
    xl,
    xl_2x: xl2x,
    url: xxlUrl,
    main_2x: xxl2x,
  } = image;

  return (
    <picture className={className}>
      <source
        srcSet={`${xxlUrl}, ${xxl2x.url} 2x`}
        media="(min-width: 1400px)"
      />
      <source srcSet={`${lg.url}, ${lg2x.url} 2x`} media="(min-width: 992px)" />
      <source srcSet={`${md.url}, ${md2x.url} 2x`} media="(min-width: 768px)" />
      <source srcSet={`${sm.url}, ${sm2x.url} 2x`} media="(min-width: 576px)" />
      <source srcSet={`${xs2x.url} 2x`} />
      <img src={xs.url} alt={renderText(alt, true) || ''} />
    </picture>
  );
};

FeaturedImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    xs: PropTypes.shape({
      url: PropTypes.string,
    }),
    xs_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    sm: PropTypes.shape({
      url: PropTypes.string,
    }),
    sm_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    md: PropTypes.shape({
      url: PropTypes.string,
    }),
    md_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    lg: PropTypes.shape({
      url: PropTypes.string,
    }),
    lg_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    xl: PropTypes.shape({
      url: PropTypes.string,
    }),
    xl_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    main_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  className: PropTypes.string,
};

FeaturedImage.defaultProps = {
  className: '',
};

export default FeaturedImage;
