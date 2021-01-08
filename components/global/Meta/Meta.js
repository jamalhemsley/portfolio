import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { renderText } from 'utils/content';

const Meta = ({ siteTitle, title, description, image, hidePageTitle }) => {
  // Format siteTitle, title and description text.
  const pageTitleFormatted = renderText(title, true);
  const siteTitleFormatted = renderText(siteTitle, true);
  const descriptionFormatted = renderText(description, true);

  // Get og:image url.
  const { url: metaImageUrl } = image || 'http';

  return (
    <Head>
      {/* Site Meta */}
      {pageTitleFormatted || siteTitleFormatted ? (
        <title key="title">
          {pageTitleFormatted !== 'Home'
            ? `
          ${pageTitleFormatted || ''}${
                pageTitleFormatted && siteTitleFormatted ? ' | ' : ''
              }${siteTitleFormatted || ''}`
            : siteTitleFormatted || ''}
        </title>
      ) : null}

      {descriptionFormatted && (
        <meta
          name="description"
          content={descriptionFormatted}
          key="meta_description"
        />
      )}

      {/* Social - FB */}
      <meta property="og:locale" content="en_US" key="meta_og_locale" />

      {pageTitleFormatted && (
        <meta
          property="og:title"
          content={pageTitleFormatted}
          key="meta_og_title"
        />
      )}

      {descriptionFormatted && (
        <meta
          property="og:description"
          content={descriptionFormatted}
          key="meta_og_description"
        />
      )}

      {siteTitleFormatted && (
        <meta
          property="og:site_name"
          content={siteTitleFormatted}
          key="meta_og_site_name"
        />
      )}

      {metaImageUrl && (
        <meta property="og:image" content={metaImageUrl} key="meta_og_image" />
      )}

      <meta
        property="og:image:width"
        content="1200"
        key="meta_og_image_width"
      />
      <meta
        property="og:image:height"
        content="600"
        key="meta_og_image_height"
      />

      {/* Social - Twitter */}
      <meta
        name="twitter:card"
        content="summary_large_image"
        key="meta_twitter_card"
      />

      {pageTitleFormatted && (
        <meta
          property="twitter:title"
          content={pageTitleFormatted}
          key="meta_twitter_title"
        />
      )}

      {descriptionFormatted && (
        <meta
          property="twitter:description"
          content={descriptionFormatted}
          key="meta_twitter_description"
        />
      )}

      {metaImageUrl && (
        <meta
          property="twitter:image"
          content={metaImageUrl}
          key="meta_twitter_image"
        />
      )}
    </Head>
  );
};

Meta.propTypes = {
  siteTitle: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]),
  description: PropTypes.string,
  image: PropTypes.shape({
    url: PropTypes.string,
  }),
  hidePageTitle: PropTypes.bool,
};

Meta.defaultProps = {
  siteTitle: null,
  title: null,
  description: null,
  image: null,
  hidePageTitle: false,
};

export default Meta;
