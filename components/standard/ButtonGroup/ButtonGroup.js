import React from 'react';
import PropTypes from 'prop-types';

import styles from './ButtonGroup.module.scss';

export const ButtonGroup = ({ children, className }) => (
  <div className={`${styles.ButtonGroup}${className ? ` ${className}` : ''}`}>
    {children}
  </div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default ButtonGroup;
