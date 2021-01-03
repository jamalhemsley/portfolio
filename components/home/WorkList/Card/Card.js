import React from 'react';
import PropTypes from 'prop-types';
import { default as NextLink } from 'next/link';
import { RichText } from 'prismic-reactjs';
import { hrefResolver, linkResolver } from 'prismic-configuration';
import { motion } from 'framer-motion';
import { dateFormat, textFormat } from 'utils';

import animations from './animations';
import styles from './Card.module.scss';

export const Card = ({ work }) => {
  return (
    <motion.div
      className={styles.Card}
      initial='initial'
      whileHover='hover'
      whileTap='tap'
      animate='initial'
      variants={animations.Card}>
      <NextLink as={linkResolver(work)} href={hrefResolver(work)}>
        <a className={styles.Card__link}>View the case study</a>
      </NextLink>
      <div className={styles.Card__cover}>
        <div className={styles.Card__overlay}></div>
        <motion.img
          className={styles.Card__image}
          src='http://picsum.photos/1090/900'
          variants={animations.CardImage}
        />
      </div>
      <div className={styles.Card__main}>
        <div className={styles.Card__header}>
          <h3 className={`h5 ${styles.Card__title}`}>
            {textFormat(RichText.asText(work.data.client))}
          </h3>
          <div className={styles.Card__date}>{dateFormat(work.data.date)}</div>
        </div>
        <motion.div
          className={`text-standard ${styles.Card__body}`}
          variants={animations.CardBody}>
          <p>{textFormat(work.data.tagline)}</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  work: PropTypes.shape({}).isRequired,
};

export default Card;
