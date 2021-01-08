import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import ResizeObserver from 'resize-observer-polyfill';
import { renderText } from 'utils/content';
import Card from './Card/Card';

import styles from './Work.module.scss';

const sortArray = (array, returnEven = null) => {
  let results = [];

  if (returnEven === null) results = array;

  if (returnEven) results = array.filter((item, index) => index % 2 !== 0);

  if (!returnEven) results = array.filter((item, index) => index % 2 === 0);

  return results;
};

const useResizeObserverWidth = ({ ref }) => {
  const [width, setWidth] = useState({
    width: 0,
  });

  const handleResize = (entries) => setWidth(entries[0].contentRect.width);

  const [resizeObs] = useState(() =>
    typeof window !== 'undefined' ? new ResizeObserver(handleResize) : undefined
  );

  useEffect(() => {
    if (!resizeObs) return false;

    if (ref.current) resizeObs.observe(ref.current);

    return () => resizeObs.disconnect();
  }, [ref, resizeObs]);

  return width;
};

const Work = ({ title, description, work }) => {
  // Setup ref and state.
  const ref = useRef(null);
  const [workLayoutIsSingle, setWorkLayout] = useState(null);

  const workGridWidth = useResizeObserverWidth({ ref });

  useEffect(() => {
    /* if (gridLayout.isSingleColumn === null) {
      if (width < 928) setGridLayout({ isSingleColumn: true });

      if (width >= 928) setGridLayout({ isSingleColumn: false });
    } */

    if (workGridWidth < 928 && !workLayoutIsSingle) setWorkLayout(true);
    else if (workGridWidth >= 928 && workLayoutIsSingle) setWorkLayout(false);
  }, [workGridWidth, workLayoutIsSingle]);

  // Gather all work items into an array.
  const workItems = work.map((project) => (
    <div key={`work-${project.uid}`} className={styles.Work__item}>
      <Card work={project} />
    </div>
  ));

  return (
    <section className={`section ${styles.Work}`}>
      <div className="container">
        <div className="row">
          <div className="col-16">
            <div ref={ref} className={styles.Work__inner}>
              <div className="row">
                <div className="col-14 offset-1 col-lg-7">
                  {title || description ? (
                    <div className={styles.Work__header}>
                      {title && <h2>{renderText(title, true)}</h2>}

                      {description && (
                        <div
                          className={`lead text-standard ${styles.Work__description}`}>
                          {renderText(description)}
                        </div>
                      )}
                    </div>
                  ) : null}

                  {workLayoutIsSingle ? workItems : sortArray(workItems, true)}
                </div>
                <div className="d-none col-14 offset-1 col-lg-7 d-lg-block offset-lg-0">
                  {!workLayoutIsSingle ? sortArray(workItems, false) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Work.propTypes = {
  title: PropTypes.string,
  description: PropTypes.arrayOf(PropTypes.shape({})),
  work: PropTypes.arrayOf(PropTypes.shape({})),
};

Work.defaultProps = {
  title: '',
  description: [],
  work: [],
};

export default Work;
