import React from 'react';
import PropType from 'prop-types';
import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { htmlSerializer, textFormat } from 'utils';
import copyToClipboard from './copyToClipboard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './StyleGuide.module.scss';

const ExternalLinkIcon = () => (
  <img src='/icons/external-link-primary.svg' height='16' width='16' />
);

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
        <h3 className={`h4 ${styles.title}`}>{title}</h3>
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
};

const TypographySample = ({ sample, author, link }) => {
  return (
    <div className={styles.StyleGuide__typography}>
      {sample && (
        <img
          className={styles.sample}
          src={sample.url}
          alt={sample.alt ? sample.alt : ''}
        />
      )}

      {author && (
        <div className={`text-standard ${styles.credit}`}>
          <a
            className={styles.author}
            href={Link.url(link.link, linkResolver)}
            target='_blank'
            rel='noopener'>
            <span>By {textFormat(author)}</span>
            <span className={styles.icon}>
              <ExternalLinkIcon />
            </span>
          </a>
        </div>
      )}
    </div>
  );
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
        {colors.map((color, index) => (
          <button
            key={`color-${index}`}
            className={styles.swatch}
            style={{ color: color.color }}
            onClick={(e) => copyColorToClipboard(e, color.color)}
            onMouseLeave={(e) => resetColor(e)}>
            <div className={styles.colorContainer}>
              <div className={styles.color} style={{ background: color.color }}>
                <svg
                  viewBox='0 0 32 32'
                  version='1.1'
                  xmlns='http://www.w3.org/2000/svg'>
                  <defs>
                    <filter id='a'>
                      <feColorMatrix
                        in='SourceGraphic'
                        values='0 0 0 0 0.956863 0 0 0 0 0.956863 0 0 0 0 0.964706 0 0 0 1.000000 0'
                      />
                    </filter>
                  </defs>
                  <g filter='url(#a)' fill='none' fillRule='evenodd'>
                    <path
                      d='M21.104 0c-.682 0-1.365.26-1.885.781l-5.024 5.024a1.22 1.22 0 001.724 1.724l1.805-1.805a1.332 1.332 0 111.885 1.883L19 8.219a1.024 1.024 0 101.448 1.448l-.057.057a1.332 1.332 0 011.885 0 1.332 1.332 0 010 1.885l.057-.057A1.024 1.024 0 1023.781 13l1.935-1.935a1.332 1.332 0 011.886 0 1.332 1.332 0 010 1.886l-3.13 3.13a1.22 1.22 0 001.723 1.724l5.024-5.024a2.666 2.666 0 000-3.77L22.989.78A2.658 2.658 0 0021.105 0zm-9.659 9.104c-.34 0-.68.13-.94.39l-3.057 3.058a2.666 2.666 0 000 3.77l1.411 1.415a1.934 1.934 0 010 2.734l-.205.209c-1.334 1.333-4.817 2.858-6.31 4.351C.11 27.265-.666 30.108.609 31.385c1.276 1.276 4.122.502 6.357-1.731 1.495-1.495 3.034-4.987 4.367-6.32l.196-.196a1.934 1.934 0 012.734 0l1.414 1.414a2.666 2.666 0 003.77 0l3.058-3.057a1.333 1.333 0 000-1.886L12.391 9.495c-.261-.26-.605-.39-.946-.39zM4 26.667a1.332 1.332 0 110 2.666 1.333 1.333 0 110-2.666z'
                      fill='#535365'
                      fillRule='nonzero'
                    />
                  </g>
                </svg>
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
                {textFormat(color.name)}
              </div>
            </div>
          </button>
        ))}
      </div>
    );
  }

  return null;
};

export const StyleGuide = ({ data, className }) => {
  if (data) {
    return (
      <section className={`${className} ${styles.StyleGuide}`}>
        <div className='container'>
          <div className='row'>
            <div className='col-14 offset-1'>
              <div className='row'>
                {data.items && (
                  <Section count={1} title='Color Palette'>
                    <ColorGrid colors={data.items} />
                  </Section>
                )}

                {data.primary.typography_sample_1 ||
                data.primary.typography_sample_2 ? (
                  <Section count={2} title='Typography'>
                    {data.primary.typography_sample_1 && (
                      <TypographySample
                        sample={data.primary.typography_sample_1}
                        author={data.primary.typography_author_1}
                        link={data.primary.typography_link_1}
                      />
                    )}

                    {data.primary.typography_sample_2 && (
                      <TypographySample
                        sample={data.primary.typography_sample_2}
                        author={data.primary.typography_author_2}
                        link={data.primary.typography_link_2}
                      />
                    )}

                    <div className={styles.description}>
                      <RichText
                        render={data.primary.typography_description}
                        linkResolver={linkResolver}
                        htmlSerializer={htmlSerializer}
                      />
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

export default StyleGuide;
