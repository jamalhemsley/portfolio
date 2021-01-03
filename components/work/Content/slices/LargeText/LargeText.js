import React from 'react';
import PropType from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { textFormat } from 'utils';

import styles from './LargeText.module.scss';

export const LargeText = ({ data, className }) => {
  if (data) {
    return (
      <section className={`${className} ${styles.LargeText}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-14 offset-1'>
              {data.primary.large_text_title && (
                <h2 className={`h3 ${styles.LargeText__title}`}>
                  {textFormat(RichText.asText(data.primary.large_text_title))}
                </h2>
              )}

              {data.primary.large_text_text && (
                <p className='lead-lg'>
                  {textFormat(data.primary.large_text_text)}
                </p>
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
  data: PropType.shape({}),
  className: PropType.string,
};

export default LargeText;
