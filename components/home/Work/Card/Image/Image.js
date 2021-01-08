import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { renderText } from 'utils/content';

import animations from '../animations';

const Image = ({ image, className }) => {
  const {
    alt,
    preview_xs: previewXs,
    preview_xs_2x: previewXs2x,
    preview_sm: previewSm,
    preview_sm_2x: previewSm2x,
    preview_md: previewMd,
    preview_md_2x: previewMd2x,
    preview_lg: previewLg,
    preview_lg_2x: previewLg2x,
    preview_xl: previewXl,
    preview_xl_2x: previewXl2x,
    preview_xxl: previewXxl,
    preview_xxl_2x: previewXxl2x,
  } = image;

  return (
    <motion.picture className={className} variants={animations.CardImage}>
      <source
        srcSet={`${previewXxl.url}, ${previewXxl2x.url} 2x`}
        media="(min-width: 1400px)"
      />
      <source
        srcSet={`${previewXl.url}, ${previewXl2x.url} 2x`}
        media="(min-width: 1200px)"
      />
      <source
        srcSet={`${previewLg.url}, ${previewLg2x.url} 2x`}
        media="(min-width: 992px)"
      />
      <source
        srcSet={`${previewMd.url}, ${previewMd2x.url} 2x`}
        media="(min-width: 768px)"
      />
      <source
        srcSet={`${previewSm.url}, ${previewSm2x.url} 2x`}
        media="(min-width: 576px)"
      />
      <source srcSet={`${previewXs2x.url} 2x`} />
      <img src={previewXs.url} alt={renderText(alt, true) || ''} />
    </motion.picture>
  );
};

Image.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    preview_xs: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_xs_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_sm: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_sm_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_md: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_md_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_lg: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_lg_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_xl: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_xl_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_xxl: PropTypes.shape({
      url: PropTypes.string,
    }),
    preview_xxl_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  className: PropTypes.string,
};

Image.defaultProps = {
  className: '',
};

export default Image;
