import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

export const Meta = ({ title, description, author, image }) => {
  return (
    <Head>
      <meta charSet='utf-8' key='meta_charset' />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1'
        key='meta_viewport'
      />

      {/* Site Meta */}
      {title && <title key='title'>{title}</title>}

      {description && (
        <meta name='description' content={description} key='meta_description' />
      )}

      {/* Social - FB */}
      <meta property='og:locale' content='en_US' key='meta_og_locale' />

      {title && (
        <meta property='og:title' content={title} key='meta_og_title' />
      )}

      {description && (
        <meta
          property='og:description'
          content={description}
          key='meta_og_description'
        />
      )}

      {author && (
        <meta
          property='og:site_name'
          content={author}
          key='meta_og_site_name'
        />
      )}

      {image && (
        <meta property='og:image' content={image} key='meta_og_image' />
      )}

      <meta
        property='og:image:width'
        content='1200'
        key='meta_og_image_width'
      />
      <meta
        property='og:image:height'
        content='600'
        key='meta_og_image_height'
      />

      {/* Social - Twitter */}
      <meta
        name='twitter:card'
        content='summary_large_image'
        key='meta_twitter_card'
      />

      {title && (
        <meta
          property='twitter:title'
          content={title}
          key='meta_twitter_title'
        />
      )}

      {description && (
        <meta
          property='twitter:description'
          content={description}
          key='meta_twitter_description'
        />
      )}

      {image && (
        <meta
          property='twitter:image'
          content={meta_image}
          key='meta_twitter_image'
        />
      )}
    </Head>
  );
};

Meta.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
};

export default Meta;
