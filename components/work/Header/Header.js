import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { dateFormat, textFormat } from 'utils';
import { Button } from 'components/standard';
import { ResponsiveImage } from './ResponsiveImage/ResponsiveImage';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

const Header = ({ client, date, title, tagline, image }) => {
  return (
    <header className={styles.Header}>
      <div className='container'>
        <div className='row'>
          <div className='col-14 offset-1'>
            {client || date ? (
              <div className={styles.Header__meta}>
                {client && (
                  <span className={`h3 ${styles.Header__client}`}>
                    {textFormat(RichText.asText(client))}
                  </span>
                )}
                {date && (
                  <span className={`h3 ${styles.Header__date}`}>
                    {dateFormat(date)}
                  </span>
                )}
              </div>
            ) : null}

            {title && (
              <h1 className={styles.Header__title}>
                {textFormat(RichText.asText(title))}
              </h1>
            )}
          </div>
        </div>
        <div className='row'>
          <div className='col-13 col-sm-12 col-md-11 offset-1 col-lg-9 col-xl-10 col-xxl-10'>
            {tagline && (
              <p className={`lead-lg ${styles.Header__tagline}`}>
                {textFormat(tagline)}
              </p>
            )}
          </div>
          <div className='col-14 offset-1 col-lg-4 col-xl-3 offset-xl-1 d-lg-flex justify-content-lg-end align-items-lg-end'>
            <Button
              isLink={true}
              label='View Case'
              link='#overview'
              icon={<FontAwesomeIcon icon={faChevronDown} size='lg' />}
            />
          </div>
        </div>
        <div className='row'>
          <div className='col-16'>
            <div className={styles.Header__cover}>
              <ResponsiveImage image={image} className={styles.Header__image} />
              <div className={styles.Header__underlay}>
                <img src={image.url} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  client: PropTypes.array,
  date: PropTypes.string,
  title: PropTypes.array,
  tagline: PropTypes.string,
  image: PropTypes.shape({}),
};

export default Header;
