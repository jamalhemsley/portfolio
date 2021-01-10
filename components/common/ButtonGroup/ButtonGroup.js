import React from 'react';
import PropTypes from 'prop-types';

// import styles from './ButtonGroup.module.scss';

const ButtonGroup = ({ children, className }) => (
  <div className={`ButtonGroup ${className || ''}`}>{children}</div>
);

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

ButtonGroup.defaultProps = {
  className: '',
};

export default ButtonGroup;
