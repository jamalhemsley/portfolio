import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';
import { FeaturedImage } from '..';

import styles from './Content.module.scss';

const Content = ({ heading, content, featuredImage }) => (
  <section>
    <div className="container">
      <div className="row">
        <div
          className={
            featuredImage
              ? 'order-2 order-lg-1 col-14 offset-1 col-lg-8 col-xl-7'
              : 'col-14 offset-1 col-md-12 offset-md-2 col-xxl-10 offset-xxl-3'
          }>
          <div className="text-standard">
            {heading ? renderText(heading) : null}
            {content ? renderText(content) : null}
          </div>
        </div>
        {featuredImage ? (
          <div className="order-1 order-lg-2 col-14 offset-1 col-lg-6 col-xl-7">
            <FeaturedImage
              image={featuredImage}
              className={styles.Content__image}
            />
          </div>
        ) : null}
      </div>
    </div>
  </section>
);

Content.propTypes = {
  heading: PropTypes.arrayOf(PropTypes.shape({})),
  content: PropTypes.arrayOf(PropTypes.shape({})),
  featuredImage: PropTypes.shape({}),
};

Content.defaultProps = {
  heading: [],
  content: [],
  featuredImage: {},
};

export default Content;
