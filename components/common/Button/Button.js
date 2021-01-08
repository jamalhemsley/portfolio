import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';
import { SiteLink } from '..';

import styles from './Button.module.scss';

const Button = ({ id, link, label, icon, type, size, className }) => {
  const buttonClass = `${styles.Button} ${
    size ? styles[`Button___${size}`] : ''
  } ${styles[`Button___${type}`]} ${className || ''}`;

  if (link)
    return (
      <SiteLink id={id || ''} link={link} className={buttonClass}>
        {label && (
          <span className={styles.Button__label}>
            {renderText(label, true)}
          </span>
        )}
        {icon && <span className={styles.icon}>{icon}</span>}
      </SiteLink>
    );

  return (
    <button id={id || ''} type="button" className={buttonClass}>
      {label && (
        <span className={styles.Button__label}>{renderText(label, true)}</span>
      )}
      {icon && <span className={styles.icon}>{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  link: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  label: PropTypes.oneOfType([PropTypes.shape({}), PropTypes.string]),
  icon: PropTypes.shape({}),
  type: PropTypes.string,
  size: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  id: '',
  link: '',
  label: '',
  icon: {},
  type: 'primary',
  size: '',
  className: '',
};

export default Button;
