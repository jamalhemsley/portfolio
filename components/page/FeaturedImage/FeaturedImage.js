import React from 'react';
import PropTypes from 'prop-types';
import { htmlSerializer } from 'utils';

import styles from './FeaturedImage.module.scss';

export const FeaturedImage = ({ img }) => {
  console.log(img);
  return <p>{img.xs.src}</p>;
};

FeaturedImage.propTypes = {};

export default FeaturedImage;
