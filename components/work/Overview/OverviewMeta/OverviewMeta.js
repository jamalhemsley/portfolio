import React from 'react';
import PropType from 'prop-types';
import { Link } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { dateFormat, textFormat } from 'utils';

import styles from '../Overview.module.scss';

const MetaWrapper = ({ title, children }) => (
  <div className={styles['Overview__meta-section']}>
    <div className={styles.title}>{title}</div>
    <ul className={`text-standard ${styles.list}`}>{children}</ul>
  </div>
);

const ExternalLinkIcon = () => (
  <img src='/icons/external-link-gradient.svg' height='16' width='16' />
);

export const OverviewMeta = ({ meta, date }) => (
  <aside className={styles.Overview__meta}>
    <MetaWrapper title='Date'>
      <li className={styles.item}>{dateFormat(date)}</li>
    </MetaWrapper>

    {meta.map((section, index) => {
      switch (section.slice_type) {
        case 'agency':
          return (
            <MetaWrapper
              key={`meta-${index}`}
              title={section.items.length > 1 ? 'Agencies' : 'Agency'}>
              {section.items.map((item, i) => {
                return (
                  <li key={`agency-${i}`} className={styles.item}>
                    {item.link ? (
                      <a href={Link.url(item.link, linkResolver)}>
                        <span>{item.name}</span>
                        <span className={styles.icon}>
                          <ExternalLinkIcon />
                        </span>
                      </a>
                    ) : (
                      textFormat(item.name)
                    )}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'contributors':
          return (
            <MetaWrapper key={`meta-${index}`} title='Contributors'>
              {section.items.map((item, i) => {
                return (
                  <li key={`contributor-${i}`} className={styles.item}>
                    {item.link ? (
                      <a href={Link.url(item.link, linkResolver)}>
                        <span>{item.name}</span>
                        <span className={styles.icon}>
                          <ExternalLinkIcon />
                        </span>
                      </a>
                    ) : (
                      textFormat(item.name)
                    )}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'roles':
          return (
            <MetaWrapper
              key={`meta-${index}`}
              title={section.items.length > 1 ? 'Roles' : 'Role'}>
              {section.items.map((item, i) => {
                return (
                  <li key={`role-${i}`} className={styles.item}>
                    {textFormat(item.role)}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        case 'technologies':
          return (
            <MetaWrapper key={`meta-${index}`} title='Technologies'>
              {section.items.map((item, i) => {
                return (
                  <li key={`technology-${i}`} className={styles.item}>
                    {textFormat(item.name)}
                  </li>
                );
              })}
            </MetaWrapper>
          );

        default:
          return null;
      }
    })}
  </aside>
);

OverviewMeta.propTypes = {
  meta: PropType.array,
  date: PropType.string,
};

export default OverviewMeta;
