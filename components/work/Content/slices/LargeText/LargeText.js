import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

import styles from './LargeText.module.scss';

export const LargeText = ({ data, className }) => {
  const {
    large_text_title: largeTextTitle,
    large_text_text: largeTextContent,
  } = data.primary;

  if (data) {
    return (
      <section className={`${className} ${styles.LargeText}`}>
        <div className="container">
          <div className="row">
            <div className="col-14 offset-1">
              {largeTextTitle && (
                <h2 className={`h3 ${styles.LargeText__title}`}>
                  {renderText(largeTextTitle, true)}
                </h2>
              )}

              {largeTextContent && (
                <p className="lead-lg">{renderText(largeTextContent)}</p>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

LargeText.propTypes = {
  data: PropTypes.shape({
    primary: PropTypes.shape({
      large_text_title: PropTypes.arrayOf(PropTypes.shape({})),
      large_text_text: PropTypes.string,
    }),
  }),
  className: PropTypes.string,
};

LargeText.defaultProps = {
  data: {},
  className: '',
};

export default LargeText;
