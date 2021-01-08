import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

import styles from './TextCards.module.scss';

const TextCard = ({ card, align }) => {
  if (card) {
    const {
      card_is_highlighted: isHighlighted,
      card_title: title,
      card_tagline: tagline,
      card_text: content,
    } = card;

    return (
      <div
        className={`${
          align === 'left'
            ? 'col-14 offset-1 col-lg-7'
            : 'col-14 offset-1 col-lg-7 offset-lg-0'
        } ${styles.TextCards__container}`}>
        <div
          className={`${styles.TextCards__card} ${
            isHighlighted && styles['TextCards__card--highlighted']
          }`}>
          {title && (
            <h3 className={`h4 ${isHighlighted && 'text-gradient-primary'}`}>
              {renderText(title, true)}
            </h3>
          )}

          {tagline && (
            <p className={`lead ${styles.tagline}`}>
              {renderText(tagline, true)}
            </p>
          )}

          {content && (
            <div className={`text-standard ${styles.content}`}>
              {renderText(content)}
            </div>
          )}
        </div>
      </div>
    );
  }

  return null;
};

TextCard.propTypes = {
  card: PropTypes.shape({
    card_is_highlighted: PropTypes.bool,
    card_title: PropTypes.string,
    card_tagline: PropTypes.string,
    card_text: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  align: PropTypes.string,
};

TextCard.defaultProps = {
  card: {},
  align: '',
};

export const TextCards = ({ data, className }) => {
  const { items } = data;

  if (data) {
    // Reduce cards array into 2-pair matrix.
    const itemRows = items.reduce(
      (rows, key, index) =>
        (index % 2 === 0
          ? rows.push([key])
          : rows[rows.length - 1].push(key)) && rows,
      []
    );

    return (
      <section className={`${className} ${styles.TextCards}`}>
        <div className="container">
          {itemRows.map((row, i) => {
            const key = `card-row-${i}`;

            return (
              <div key={key} className={`row ${styles.TextCards__row}`}>
                {row.map((card, j) => {
                  const cardKey = `card-${j}`;

                  return (
                    <TextCard
                      key={cardKey}
                      card={card}
                      align={j === 0 ? 'left' : 'right'}
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </section>
    );
  }

  return null;
};

TextCards.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
  }),
  className: PropTypes.string,
};

TextCards.defaultProps = {
  data: {},
  className: '',
};

export default TextCards;
