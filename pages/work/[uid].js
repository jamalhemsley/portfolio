import React from 'react';
import PropTypes from 'prop-types';
import { RichText } from 'prismic-reactjs';
import { Client, PrismicQueries } from 'utils';
import { DefaultLayout } from 'layouts';
import { Meta } from 'components/global';
import { Header, Overview, Content } from 'components/work';

export const Work = ({ work, site_settings }) => {
  if (work && work.data) {
    return (
      <DefaultLayout siteSettings={site_settings}>
        <Meta
          title={
            work.data.meta_title
              ? work.data.meta_title
              : RichText.asText(work.data.title)
          }
          description={work.data.meta_description}
          author={site_settings.data.author}
        />
        <Header
          client={work.data.client}
          date={work.data.date}
          title={work.data.title}
          tagline={work.data.tagline}
          image={work.data.featured_image}
        />
        <main>
          <Overview
            overview={work.data.overview}
            links={work.data.links}
            meta={work.data.work_meta}
            date={work.data.date}
            className='section'
          />
          <Content content={work.data.content} className='section' />
        </main>
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ params }) {
  const client = Client();

  const work = (await client.getByUID('work', params.uid)) || {};
  const site_settings = (await client.getSingle('site_settings')) || {};

  return {
    props: {
      site_settings,
      work,
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

Work.propTypes = {
  work: PropTypes.shape({}).isRequired,
  site_settings: PropTypes.shape({}),
};

Work.defaultProps = {
  work: {},
};

export default Work;
