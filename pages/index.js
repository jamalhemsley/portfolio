import React from 'react';
import PropTypes from 'prop-types';
import Prismic from '@prismicio/client';
import { RichText } from 'prismic-reactjs';
import { Client } from 'utils';
import { DefaultLayout } from 'layouts';
import { Meta } from 'components/global';
import { Header, WorkList as Work } from 'components/home';

export const Home = ({ doc, works, site_settings }) => {
  if (doc && doc.data) {
    return (
      <DefaultLayout siteSettings={site_settings}>
        <Meta
          title={
            doc.data.meta_title
              ? doc.data.meta_title
              : RichText.asText(doc.data.title)
          }
          description={doc.data.meta_description}
          author={site_settings.data.author}
        />
        <Header
          author={site_settings.data.author}
          title={doc.data.headline}
          tagline={doc.data.tagline}
          buttonLabel={doc.data.contact_button_label}
          socialProfiles={site_settings.data.social_profiles}
        />
        <Work
          title={doc.data.work_grid_title}
          description={doc.data.work_grid_description}
          works={works}
        />
      </DefaultLayout>
    );
  }

  return null;
};

export async function getStaticProps() {
  const client = Client();

  const doc = (await client.getSingle('home')) || {};
  const site_settings = (await client.getSingle('site_settings')) || {};

  let works =
    (await client.query(Prismic.Predicates.at('document.type', 'work'))) || [];
  works = works.results;

  return {
    props: {
      doc,
      site_settings,
      works,
    },
  };
}

Home.propTypes = {
  doc: PropTypes.shape({}).isRequired,
  site_settings: PropTypes.shape({}),
};

export default Home;
