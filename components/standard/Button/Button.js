import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

export const Button = ({
  isLink,
  isBlank,
  link,
  label,
  icon,
  style,
  size,
  className,
}) => {
  const buttonComponents = [];

  if (label) {
    buttonComponents.push(
      <span key='Button-label' className={styles.Button__label}>
        {label}
      </span>
    );
  }

  if (icon) {
    buttonComponents.push(
      <span key='Button-icon' className={styles.Button__icon}>
        {icon}
      </span>
    );
  }

  if (isLink) {
    return (
      <a
        className={`${styles.Button} ${size ? styles[`Button--${size}`] : ''} ${
          styles[`Button--${style}`]
        } ${className ? className : ''}`}
        href={link}
        target={isBlank ? '_blank' : null}
        rel={isBlank ? 'noopener' : null}>
        {buttonComponents}
      </a>
    );
  }

  return (
    <button
      className={`${styles.Button} ${size ? styles[`Button--${size}`] : ''} ${
        styles[`Button--${style}`]
      } ${className ? className : ''}`}>
      {buttonComponents}
    </button>
  );
};

Button.propTypes = {
  icon: PropTypes.shape({}),
  isBlank: PropTypes.bool,
  isLink: PropTypes.bool,
  label: PropTypes.string,
  link: PropTypes.string,
  size: PropTypes.string,
  style: PropTypes.string,
  buttonClass: PropTypes.string,
};

Button.defaultProps = {
  isBlank: false,
  isLink: false,
  style: 'primary',
};

export default Button;
