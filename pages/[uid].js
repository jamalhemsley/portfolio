import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Client, PrismicQueries } from 'utils';
import { DefaultLayout } from 'layouts';
import { Meta } from 'components/global';
import { Content } from 'components/page';

export const Page = ({ page, site_settings }) => {
  if (page && page.data) {
    return (
      <DefaultLayout siteSettings={site_settings}>
        <Meta
          title={
            page.data.meta_title
              ? page.data.meta_title
              : RichText.asText(page.data.title)
          }
          description={page.data.meta_description}
          author={site_settings.data.author}
        />
        <Content
          content={page.data.content}
          featuredImage={page.data.featured_image}
          featuredImageAlt={page.data.featured_image_alt}
        />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const client = Client();

  const page = (await client.getByUID('page', params.uid)) || {};
  const site_settings = (await client.getSingle('site_settings')) || {};

  return {
    props: {
      page,
      site_settings,
    },
  };
}

export async function getStaticPaths() {
  const pages = await PrismicQueries.fetchAllPages;

  return {
    paths: pages.map((page) => `/${page.uid}`),
    fallback: true,
  };
}

Page.propTypes = {
  page: PropTypes.shape({}).isRequired,
  site_settings: PropTypes.shape({}),
};

Page.defaultProps = {
  page: {},
};

export default Page;
