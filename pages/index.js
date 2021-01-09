import React from 'react';
import PropTypes from 'prop-types';
import Prismic from '@prismicio/client';
import { PrismicClient } from 'utils/prismic';
import { DefaultLayout } from 'layouts';
import { Header, Work } from 'components/home';
import { motion } from 'framer-motion';

const Home = ({ site, page, work }) => {
  if (page && page.data) {
    const {
      pre_headline: preHeadline,
      headline,
      tagline,
      contact_button_label: contactButtonLabel,
      work_grid_title: workGridTitle,
      work_grid_description: workGridDescription,
    } = page.data;

    return (
      <DefaultLayout site={site} content={page}>
        <motion.div>
          <Header
            preTitle={preHeadline}
            title={headline}
            tagline={tagline}
            contactButtonLabel={contactButtonLabel}
          />
          <Work
            title={workGridTitle}
            description={workGridDescription}
            work={work}
          />
        </motion.div>
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
  site: PropTypes.shape({}),
  page: PropTypes.shape({
    data: PropTypes.shape({
      pre_headline: PropTypes.string,
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
