import React from 'react';
import PropTypes from 'prop-types';

export const ResponsiveImage = ({ image, className }) => {
  // Setup image data.
  const alt = image.alt ? image.alt : '';

  // Setup image sizes.
  const xs = image.xs.url;
  const xs_2x = image.xs_2x.url;
  const sm = image.sm.url;
  const sm_2x = image.sm_2x.url;
  const md = image.md.url;
  const md_2x = image.md_2x.url;
  const lg = image.lg.url;
  const lg_2x = image.lg_2x.url;
  const xl = image.xl.url;
  const xl_2x = image.xl_2x.url;
  const xxl = image.url;
  const xxl_2x = image.main_2x.url;

  return (
    <picture className={className}>
      <source srcSet={`${xxl}, ${xxl_2x} 2x`} media='(min-width: 1400px)' />
      <source srcSet={`${xl}, ${xl_2x} 2x`} media='(min-width: 1200px)' />
      <source srcSet={`${lg}, ${lg_2x} 2x`} media='(min-width: 992px)' />
      <source srcSet={`${md}, ${md_2x} 2x`} media='(min-width: 768px)' />
      <source srcSet={`${sm}, ${sm_2x} 2x`} media='(min-width: 576px)' />
      <source srcSet={`${xs_2x} 2x`} />
      <img src={xs} alt={alt} />
    </picture>
  );
};

ResponsiveImage.propTypes = {
  image: PropTypes.shape({}),
  className: PropTypes.string,
};

export default ResponsiveImage;
