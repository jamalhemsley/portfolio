import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { linkResolver } from 'prismic-configuration';
import { htmlSerializer } from 'utils';
import { FeaturedImage } from '../';

const Content = ({ content, featuredImage, featuredImageAlt }) => {
  console.log(featuredImage);
  return (
    <section className={styles.Content}>
      <div className='container'>
        <div className='row'>
          <div
            className={
              featuredImage
                ? 'order-2 order-lg-1 col-14 offset-1'
                : 'col-14 offset-1 col-md-12 offset-md-2 col-xxl-10 offset-xxl-3'
            }>
            <div className={`text-standard ${styles.Content__main}`}>
              <RichText
                render={content}
                linkResolver={linkResolver}
                htmlSerializer={htmlSerializer}
              />
            </div>
          </div>
          {featuredImage && (
            <div className='order-1 order-lg-2 col-14 offset-1'>
              <FeaturedImage img={featuredImage} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

Content.propTypes = {
  content: PropTypes.array,
  featuredImageAlt: PropTypes.string,
};

export default Content;
