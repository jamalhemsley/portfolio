import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';
import { SiteLink } from 'components/common';
import { ExternalLinkIcon, PaintBrushIcon } from 'components/icons';
import copyToClipboard from './copyToClipboard';

import styles from './StyleGuide.module.scss';

const Section = ({ count = 1, title, children }) => {
  let currentCount = count;

  if (count <= 9 && count >= 1) {
    currentCount = `0${currentCount}`;
  }

  return (
    <div className={`col-14 col-lg-8 ${styles.StyleGuide__section}`}>
      <div className={styles.side}>
        <span className={`h4 ${styles.count}`}>{currentCount}</span>
      </div>
      <div className={styles.main}>
        <h3 className={`h4 ${styles.title}`}>{renderText(title, true)}</h3>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

Section.propTypes = {
  count: PropTypes.number,
  title: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  count: 0,
  title: '',
  children: null,
};

const TypographySample = ({ sample, author, link }) => {
  const { url: sampleUrl, alt: sampleAlt } = sample;

  return (
    <div className={styles.StyleGuide__typography}>
      {sample && (
        <img
          className={styles.sample}
          src={sampleUrl}
          alt={renderText(sampleAlt, true) || ''}
        />
      )}

      {author && (
        <div className={`text-standard ${styles.credit}`}>
          <SiteLink link={link} className={styles.author}>
            <span>By {renderText(author, true)}</span>
            <span className={styles.icon}>
              <ExternalLinkIcon width={16} height={16} />
            </span>
          </SiteLink>
        </div>
      )}
    </div>
  );
};

TypographySample.propTypes = {
  sample: PropTypes.shape({
    url: PropTypes.string,
    alt: PropTypes.string,
  }),
  author: PropTypes.string,
  link: PropTypes.shape({
    link: PropTypes.string,
  }),
};

TypographySample.defaultProps = {
  sample: {},
  author: '',
  link: {},
};

const ColorGrid = ({ colors }) => {
  function resetColor(e) {
    e.stopPropagation();

    const colorEl = e.currentTarget;

    colorEl.addEventListener('transitionend', () => {
      const copyText = colorEl.querySelectorAll('[data-copy-label]')[0];

      if (copyText.textContent === 'Copied!') copyText.textContent = 'Copy?';
    });
  }

  function copyColorToClipboard(e, color) {
    e.preventDefault();

    const colorEl = e.currentTarget;

    copyToClipboard(color);

    colorEl.querySelectorAll('[data-copy-label]')[0].textContent = 'Copied!';
  }

  if (colors) {
    return (
      <div className={styles.StyleGuide__colors}>
        {colors.map((color, index) => {
          const key = `color-${index}`;

          return (
            <button
              key={key}
              type="button"
              className={styles.swatch}
              style={{ color: color.color }}
              onClick={(e) => copyColorToClipboard(e, color.color)}
              onMouseLeave={(e) => resetColor(e)}>
              <div className={styles.colorContainer}>
                <div
                  className={styles.color}
                  style={{ background: color.color }}>
                  <PaintBrushIcon />
                </div>
              </div>
              <div className={styles.label}>
                <div className={styles.copy} data-copy-label>
                  Copy?
                </div>
                <div className={styles.code}>{color.color}</div>
                <div
                  className={styles.name}
                  style={{
                    color: color.display_color
                      ? color.display_color
                      : color.color,
                  }}>
                  {renderText(color.name, true)}
                </div>
              </div>
            </button>
          );
        })}
      </div>
    );
  }

  return null;
};

ColorGrid.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.shape({})),
};

ColorGrid.defaultProps = {
  colors: {},
};

const StyleGuide = ({ data, className }) => {
  const { items: colors } = data;
  const {
    typography_sample_1: typographySample1,
    typography_author_1: typographyAuthor1,
    typography_link_1: typographyLink1,
    typography_sample_2: typographySample2,
    typography_author_2: typographyAuthor2,
    typography_link_2: typographyLink2,
    typography_description: typographyDescription,
  } = data.primary;

  if (data) {
    return (
      <section className={`${className} ${styles.StyleGuide}`}>
        <div className="container">
          <div className="row">
            <div className="col-14 offset-1">
              <div className="row">
                {colors && (
                  <Section count={1} title="Color Palette">
                    <ColorGrid colors={colors} />
                  </Section>
                )}

                {typographySample1 || typographySample2 ? (
                  <Section count={2} title="Typography">
                    {typographySample1 && (
                      <TypographySample
                        sample={typographySample1}
                        author={typographyAuthor1}
                        link={typographyLink1}
                      />
                    )}

                    {typographySample2 && (
                      <TypographySample
                        sample={typographySample2}
                        author={typographyAuthor2}
                        link={typographyLink2}
                      />
                    )}

                    <div className={styles.description}>
                      {renderText(typographyDescription)}
                    </div>
                  </Section>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return null;
};

StyleGuide.propTypes = {
  data: PropTypes.shape({
    items: PropTypes.arrayOf(PropTypes.shape({})),
    primary: PropTypes.shape({
      typography_sample_1: PropTypes.shape({}),
      typography_sample_2: PropTypes.shape({}),
      typography_author_1: PropTypes.string,
      typography_author_2: PropTypes.string,
      typography_link_1: PropTypes.shape({}),
      typography_link_2: PropTypes.shape({}),
      typography_description: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
};

StyleGuide.defaultProps = {
  data: {},
};

export default StyleGuide;
