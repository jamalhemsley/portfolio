import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { renderText } from 'utils/content';
import { SiteLink } from 'components/common';
import Image from './Image/Image';

import animations from './animations';
// import styles from './Card.module.scss';

const Card = ({ work }) => {
  const { client, title, tagline, featured_image: previewImage } = work.data;
  const { tags } = work;

  if (work)
    return (
      <motion.article
        className="Card"
        initial="initial"
        whileHover="hover"
        whileTap="tap"
        animate="initial"
        variants={animations.Card}>
        <SiteLink link={work}>
          <header className="Card__header">
            <span className="Card__client">{renderText(client, true)}</span>
            <h3 className="h4 Card__title">{renderText(title, true)}</h3>
          </header>
          <section className="lead Card__body">
            {renderText(tagline, true)}
          </section>
          <footer className="Card__footer">
            {tags ? (
              <ul className="Card__tags">
                {tags.map((tag, index) => {
                  const key = `tag-item-${index}`;

                  return (
                    <li key={key} className="Card__tag">
                      {renderText(tag)}
                    </li>
                  );
                })}
              </ul>
            ) : null}
            <span className="Card__moreText">
              <span className="text">View the case study</span>
              <span className="icon">
                <FontAwesomeIcon icon="long-arrow-alt-right" size="sm" />
              </span>
            </span>
          </footer>
          <div className="Card__background">
            <Image className="Card__backgroundImage" image={previewImage} />
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
