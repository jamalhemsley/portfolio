import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import { renderDate, renderText } from 'utils/content';
import { Button } from 'components/common';
import Image from './Image/Image';

import styles from './Header.module.scss';

const Header = ({ client, date, title, tagline, image }) => {
  const { url: underlayImageUrl } = image;

  return (
    <header className={styles.Header}>
      <div className="container">
        <div className="row">
          <div className="col-14 offset-1">
            {client || date ? (
              <div className={styles.Header__meta}>
                {client && (
                  <span className={`h3 ${styles.Header__client}`}>
                    {renderText(client, true)}
                  </span>
                )}
                {date && (
                  <span className={`h3 ${styles.Header__date}`}>
                    {renderDate(date)}
                  </span>
                )}
              </div>
            ) : null}

            {title && (
              <h1 className={styles.Header__title}>
                {renderText(title, true)}
              </h1>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-13 col-sm-12 col-md-11 offset-1 col-lg-9 col-xl-10 col-xxl-10">
            {tagline && (
              <p className={`lead-lg ${styles.Header__tagline}`}>
                {renderText(tagline, true)}
              </p>
            )}
          </div>
          <div className="col-14 offset-1 col-lg-4 col-xl-3 offset-xl-1 d-lg-flex justify-content-lg-end align-items-lg-end">
            <Button
              label="View Case"
              link="#overview"
              icon={<FontAwesomeIcon icon="chevron-down" />}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-16">
            <motion.div className={styles.Header__cover} layoutId="cover">
              <Image image={image} className={styles.Header__image} />
              <div className={styles.Header__underlay}>
                <img src={underlayImageUrl} alt="" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  client: PropTypes.arrayOf(PropTypes.shape({})),
  date: PropTypes.string,
  title: PropTypes.arrayOf(PropTypes.shape({})),
  tagline: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
};

Header.defaultProps = {
  client: [],
  date: '',
  title: [],
  tagline: '',
  image: {},
};

export default Header;
