import React from 'react';
import PropTypes from 'prop-types';
import { PrismicClient, PrismicQueries } from 'utils/prismic';
import { DefaultLayout } from 'layouts';
import { Header, Overview, Content } from 'components/work';

const Work = ({ site, work }) => {
  if (work && work.data) {
    const {
      client,
      date,
      title,
      tagline,
      featured_image: featuredImage,
      overview,
      links,
      work_meta: workMeta,
      content,
    } = work.data;

    return (
      <DefaultLayout site={site} content={work}>
        <Header
          client={client}
          date={date}
          title={title}
          tagline={tagline}
          image={featuredImage}
        />
        <Overview
          overview={overview}
          links={links}
          meta={workMeta}
          date={date}
          className="section"
        />
        <Content content={content} className="section" />
      </DefaultLayout>
    );
  }

  return null;
};

Work.propTypes = {
  work: PropTypes.shape({
    data: PropTypes.shape({
      client: PropTypes.arrayOf(PropTypes.shape({})),
      date: PropTypes.string,
      title: PropTypes.arrayOf(PropTypes.shape({})),
      tagline: PropTypes.string,
      featured_image: PropTypes.shape({
        url: PropTypes.string,
      }),
      overview: PropTypes.arrayOf(PropTypes.shape({})),
      links: PropTypes.arrayOf(PropTypes.shape({})),
      work_meta: PropTypes.arrayOf(PropTypes.shape({})),
      content: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  site: PropTypes.shape({}),
};

Work.defaultProps = {
  site: {},
  work: {},
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
  const work =
    (await client.getByUID('work', params.uid, ref ? { ref } : null)) || {};

  return {
    props: {
      site,
      work,
      preview,
    },
  };
}

export async function getStaticPaths() {
  const works = await PrismicQueries.fetchAllWork;

  return {
    paths: works.map((work) => `/work/${work.uid}`),
    fallback: true,
  };
}

export default Work;
