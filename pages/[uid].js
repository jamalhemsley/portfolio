import React from 'react';
import PropTypes from 'prop-types';
import { PrismicClient, PrismicQueries } from 'utils/prismic';
import DefaultLayout from 'layouts';
import Content from 'components/page';

const Page = ({ page, site }) => {
  if (page && page.data) {
    const { heading, content, featured_image: featuredImage } = page.data;

    return (
      <DefaultLayout site={site} content={page}>
        <Content
          heading={heading}
          content={content}
          featuredImage={featuredImage}
        />
      </DefaultLayout>
    );
  }

  return null;
};

Page.propTypes = {
  page: PropTypes.shape({
    data: PropTypes.shape({
      heading: PropTypes.arrayOf(PropTypes.shape({})),
      content: PropTypes.arrayOf(PropTypes.shape({})),
      featured_image: PropTypes.shape({}),
    }),
  }),
  site: PropTypes.shape({}),
};

Page.defaultProps = {
  page: {},
  site: {},
};

export async function getStaticProps({
  params,
  preview = null,
  previewData = {},
}) {
  const { ref } = previewData;

  const client = PrismicClient();

  const site =
    (await client.getSingle('site_settings', ref ? { ref } : null)) || {};
  const page =
    (await client.getByUID('page', params.uid, ref ? { ref } : null)) || {};

  return {
    props: {
      site,
      page,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const pages = await PrismicQueries.fetchAllPages;

  return {
    paths: pages.map((page) => `/${page.uid}`),
    fallback: false,
  };
}

export default Page;
