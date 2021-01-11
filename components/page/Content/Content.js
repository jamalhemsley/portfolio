import React from 'react';
import PropTypes from 'prop-types';
import { renderText } from 'utils/content';

// import styles from './Content.module.scss';

const FeaturedImage = ({ image, className }) => {
  const {
    alt,
    xs,
    xs_2x: xs2x,
    sm,
    sm_2x: sm2x,
    md,
    md_2x: md2x,
    lg,
    lg_2x: lg2x,
    url: xlUrl,
    main_2x: xl2x,
  } = image;

  return (
    <picture className={className}>
      <source srcSet={`${xlUrl}, ${xl2x.url} 2x`} media="(min-width: 992px)" />
      <source srcSet={`${lg.url}, ${lg2x.url} 2x`} media="(min-width: 992px)" />
      <source srcSet={`${md.url}, ${md2x.url} 2x`} media="(min-width: 768px)" />
      <source srcSet={`${sm.url}, ${sm2x.url} 2x`} media="(min-width: 576px)" />
      <source srcSet={`${xs2x.url} 2x`} />
      <img loading="lazy" src={xs.url} alt={renderText(alt, true) || ''} />
    </picture>
  );
};

FeaturedImage.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string,
    url: PropTypes.string,
    xs: PropTypes.shape({
      url: PropTypes.string,
    }),
    xs_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    sm: PropTypes.shape({
      url: PropTypes.string,
    }),
    sm_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    md: PropTypes.shape({
      url: PropTypes.string,
    }),
    md_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    lg: PropTypes.shape({
      url: PropTypes.string,
    }),
    lg_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
    main_2x: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
  className: PropTypes.string,
};

FeaturedImage.defaultProps = {
  className: '',
};

const Content = ({ heading, content, featuredImage }) => (
  <section className="PageContent">
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
              className="PageContent__image"
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
