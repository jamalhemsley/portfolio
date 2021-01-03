import React from 'react';
import PropType from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { textFormat, htmlSerializer } from 'utils';

import styles from './TextCards.module.scss';

const TextCard = ({ card, align }) => (
  <div
    className={`${
      align === 'left'
        ? 'col-14 offset-1 col-lg-7'
        : 'col-14 offset-1 col-lg-7 offset-lg-0'
    } ${styles.TextCards__container}`}>
    <div
      className={`${styles.TextCards__card} ${
        card.card_is_highlighted && styles['TextCards__card--highlighted']
      }`}>
      {card.card_title && (
        <h3
          className={`h4 ${
            card.card_is_highlighted && 'text-gradient-primary'
          }`}>
          {textFormat(card.card_title)}
        </h3>
      )}

      {card.card_tagline && (
        <p className={`lead ${styles.tagline}`}>
          {textFormat(card.card_tagline)}
        </p>
      )}

      {card.card_text && (
        <div className={`text-standard ${styles.content}`}>
          <RichText
            render={card.card_text}
            linkResolver={linkResolver}
            htmlSerializer={htmlSerializer}
          />
        </div>
      )}
    </div>
  </div>
);

export const TextCards = ({ data, className }) => {
  if (data) {
    // Reduce cards array into 2-pair matrix.
    const rows = data.items.reduce(function (rows, key, index) {
      return (
        (index % 2 == 0 ? rows.push([key]) : rows[rows.length - 1].push(key)) &&
        rows
      );
    }, []);

    return (
      <section className={`${className} ${styles.TextCards}`}>
        <div className='container'>
          {rows.map((row, i) => (
            <div
              key={`card-row-${i}`}
              className={`row ${styles.TextCards__row}`}>
              {row.map((card, j) => (
                <TextCard
                  key={`card-${j}`}
                  card={card}
                  align={j === 0 ? 'left' : 'right'}
                />
              ))}
            </div>
          ))}
        </div>
      </section>
    );
  }

  return null;
};

TextCard.propTypes = {
  data: PropType.array,
  className: PropType.string,
};

export default TextCards;
