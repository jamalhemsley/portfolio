import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderText } from 'utils/content';
import { Button, ButtonGroup } from 'components/common';

import styles from './Header.module.scss';

const Header = ({ preTitle, title, tagline, contactButtonLabel }) => (
  <section className="section">
    <div className="container">
      <div className="row">
        <div className="col-14 offset-1">
          {preTitle && (
            <span className={`lead ${styles.Header__preTitle}`}>
              {renderText(preTitle, true)}
            </span>
          )}

          {title && (
            <h1
              className={`display-1 text-gradient-primary ${styles.Header__title}`}>
              {renderText(title, true)}
            </h1>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-12 offset-1 col-md-10 col-lg-10 col-xl-9">
          {tagline && (
            <div className={`lead-lg text-standard ${styles.Header__tagline}`}>
              {renderText(tagline)}
            </div>
          )}
        </div>
      </div>

      {contactButtonLabel && (
        <div className="row">
          <div className="col-14 offset-1">
            <ButtonGroup className={styles.Header__actions}>
              <Button
                label={renderText(contactButtonLabel)}
                link="#footer"
                icon={<FontAwesomeIcon icon="comment" />}
                size="lg"
              />
            </ButtonGroup>
          </div>
        </div>
      )}
    </div>
  </section>
);

Header.propTypes = {
  preTitle: PropTypes.string,
  title: PropTypes.string,
  tagline: PropTypes.arrayOf(PropTypes.shape({})),
  contactButtonLabel: PropTypes.string,
};

Header.defaultProps = {
  preTitle: '',
  title: '',
  tagline: [],
  contactButtonLabel: '',
};

export default Header;
