import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderText } from 'utils/content';
import { SiteLink } from 'components/common';
import Image from './Image/Image';

import animations from './animations';
import styles from './Card.module.scss';

const Card = ({ work }) => {
  const { client, title, tagline, featured_image: previewImage } = work.data;
  const { tags } = work;

  if (work)
    return (
      <motion.article
        className={styles.Card}
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate="initial"
        variants={animations.Card}>
        <SiteLink link={work}>
          <header className={styles.Card__header}>
            <span className={styles.Card__client}>
              {renderText(client, true)}
            </span>
            <h3 className={`h4 ${styles.Card__title}`}>
              {renderText(title, true)}
            </h3>
          </header>
          <section className={`lead ${styles.Card__body}`}>
            {renderText(tagline, true)}
          </section>
          <footer className={styles.Card__footer}>
            {tags ? (
              <ul className={styles.Card__tags}>
                {tags.map((tag, index) => {
                  const key = `tag-item-${index}`;

                  return (
                    <li key={key} className={styles.Card__tag}>
                      {renderText(tag)}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <span className={styles.Card__moreText}>
              <span className={styles.text}>View the case study</span>
              <span className={styles.icon}>
                <FontAwesomeIcon icon="long-arrow-alt-right" size="sm" />
              </span>
            </span>
          </footer>
          <div className={styles.Card__background}>
            <Image
              className={styles.Card__backgroundImage}
              image={previewImage}
            />
          </div>
        </SiteLink>
      </motion.article>
    );

  return null;
};

Card.propTypes = {
  work: PropTypes.shape({
    data: PropTypes.shape({
      client: PropTypes.arrayOf(PropTypes.shape({})),
      title: PropTypes.arrayOf(PropTypes.shape({})),
      tagline: PropTypes.string,
      featured_image: PropTypes.shape({}),
    }),
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Card;
