import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { htmlSerializer, textFormat } from 'utils';
import Card from './Card/Card';

import styles from './WorkList.module.scss';

export const WorkList = ({ title, description, works }) => {
  return (
    <section className={`section ${styles.WorkList}`}>
      <div className='container'>
        <div className='row'>
          <div className='col-16'>
            <div className={styles.WorkList__inner}>
              <div className={styles.WorkList__grid}>
                <div className='row'>
                  <div className={`col-14 offset-1 col-lg-7`}>
                    {title || description ? (
                      <div
                        className={`${styles.WorkList__item} ${styles.WorkList__header}`}>
                        {title && (
                          <h2 className={styles.WorkList__title}>
                            {textFormat(title)}
                          </h2>
                        )}

                        {description && (
                          <div
                            className={`lead text-standard ${styles.WorkList__description}`}>
                            <RichText
                              render={description}
                              linkResolver={linkResolver}
                              htmlSerializer={htmlSerializer}
                            />
                          </div>
                        )}
                      </div>
                    ) : null}

                    {works.map((work, index) => {
                      return (
                        <div
                          key={`work-${index}`}
                          className={styles.WorkList__item}>
                          <Card work={work} />
                        </div>
                      );
                    })}
                  </div>
                  {/*<div
                    className={`col-14 offset-1 col-lg-7 offset-lg-0 ${styles.WorkList__list}`}></div>*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

WorkList.propTypes = {
  title: PropTypes.string,
  works: PropTypes.array,
};

WorkList.defaultProps = {
  works: [],
};

export default WorkList;
