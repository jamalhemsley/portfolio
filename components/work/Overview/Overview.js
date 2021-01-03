import React from 'react';
import PropTypes from 'prop-types';
import { Link, RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { dateFormat, htmlSerializer, textFormat } from 'utils';
import { Button, ButtonGroup } from 'components/standard';
import { OverviewMeta } from './OverviewMeta/OverviewMeta';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

import styles from './Overview.module.scss';

const Overview = ({ overview, links, meta, date, className }) => {
  return (
    <section
      className={`${styles.Overview} ${className ? className : ''}`}
      id='overview'>
      <div className='container'>
        <div className='row'>
          <div className='col-14 offset-1 col-lg-8 col-xl-9 offset-1'>
            <h2 className={`h3 ${styles.Overview__title}`}>Overview</h2>
            <div className={`text-standard ${styles.Overview__content}`}>
              <RichText
                render={overview}
                linkResolver={linkResolver}
                htmlSerializer={htmlSerializer}
              />
            </div>
            <ButtonGroup className={styles.Overview__links}>
              {links.map((link, index) => {
                const linkUrl = Link.url(link.link, linkResolver);

                return (
                  <Button
                    key={`link-${index}`}
                    isLink={true}
                    isBlank={true}
                    link={linkUrl}
                    label={link.label}
                    icon={<FontAwesomeIcon icon={faChevronRight} />}
                    style={link.is_primary ? 'primary' : 'secondary'}
                    className={styles.Overview__link}
                  />
                );
              })}
            </ButtonGroup>
          </div>
          <div className='col-14 offset-1 col-lg-5 col-xl-4'>
            <OverviewMeta meta={meta} date={date} />
          </div>
        </div>
      </div>
    </section>
  );
};

Overview.propTypes = {
  overview: PropTypes.array,
  links: PropTypes.array,
  meta: PropTypes.array,
  date: PropTypes.string,
  className: PropTypes.string,
};

export default Overview;
