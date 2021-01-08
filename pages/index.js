import React from 'react';
import PropTypes from 'prop-types';
import Prismic from '@prismicio/client';
import { PrismicClient } from 'utils/prismic';
import { DefaultLayout } from 'layouts';
import { Header, Work } from 'components/home';

const Home = ({ site, page, work }) => {
  const { site_owner: owner } = site.data;
  const {
    headline,
    tagline,
    contact_button_label: contactButtonLabel,
    work_grid_title: workGridTitle,
    work_grid_description: workGridDescription,
  } = page.data;

  if (page && page.data) {
    return (
      <DefaultLayout site={site} content={page}>
        <Header
          preTitle={owner}
          title={headline}
          tagline={tagline}
          contactButtonLabel={contactButtonLabel}
        />
        <Work
          title={workGridTitle}
          description={workGridDescription}
          work={work}
        />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps({ preview = null, previewData = {} }) {
  const { ref } = previewData;

  const client = PrismicClient();

  const site =
    (await client.getSingle('site_settings', ref ? { ref } : null)) || {};
  const page = (await client.getSingle('home', ref ? { ref } : null)) || {};

  const getWork =
    (await client.query(Prismic.Predicates.at('document.type', 'work'), {
      orderings: '[my.work.date desc]',
      pageSize: 10,
      page: 1,
    })) || [];

  const { results: work } = getWork;

  return {
    props: {
      site,
      page,
      work,
      preview,
    },
  };
}

Home.propTypes = {
  site: PropTypes.shape({
    data: PropTypes.shape({
      site_owner: PropTypes.string,
    }),
  }),
  page: PropTypes.shape({
    data: PropTypes.shape({
      headline: PropTypes.string,
      tagline: PropTypes.arrayOf(PropTypes.shape({})),
      contact_button_label: PropTypes.string,
      work_grid_title: PropTypes.string,
      work_grid_description: PropTypes.arrayOf(PropTypes.shape({})),
    }),
  }),
  work: PropTypes.arrayOf(PropTypes.shape({})),
};

Home.defaultProps = {
  site: {},
  page: {},
  work: [],
};

export default Home;
