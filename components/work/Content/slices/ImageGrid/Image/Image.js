import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

const Image = ({ image, width, className }) => {
  const isFull = width === 'Full';
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
    half_lg: halfLg,
    half_lg_2x: halfLg2x,
    half_xl: halfXl,
    half_xl_2x: halfXl2x,
    half_main: halfXxl,
    half_main_2x: halfXxl2x,
  } = image;

  return (
    <picture className={className}>
      <source
        srcSet={
          isFull
            ? `${xxlUrl}, ${xxl2x.url} 2x`
            : `${halfXxl.url}, ${halfXxl2x.url} 2x`
        }
        media="(min-width: 1400px)"
      />
      <source
        srcSet={
          isFull
            ? `${xl.url}, ${xl2x.url} 2x`
            : `${halfXl.url}, ${halfXl2x.url} 2x`
        }
        media="(min-width: 1200px)"
      />
      <source
        srcSet={
          isFull
            ? `${lg.url}, ${lg2x.url} 2x`
            : `${halfLg.url}, ${halfLg2x.url} 2x`
        }
        media="(min-width: 992px)"
      />
      <source srcSet={`${md.url}, ${md2x.url} 2x`} media="(min-width: 768px)" />
      <source srcSet={`${sm.url}, ${sm2x.url} 2x`} media="(min-width: 576px)" />
      <source srcSet={`${xs2x.url} 2x`} />
      <img src={xs.url} alt={renderText(alt, true) || ''} />
    </picture>
  );
};

Image.propTypes = {
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
    half_lg: PropTypes.shape({
      url: PropTypes.string,
    }),
    half_lg_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    half_xl: PropTypes.shape({
      url: PropTypes.string,
    }),
    half_xl_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    half_main: PropTypes.shape({
      url: PropTypes.string,
    }),
    half_main_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  width: PropTypes.string,
  className: PropTypes.string,
};

Image.defaultProps = {
  width: 'Full',
  className: '',
};

export default Image;
