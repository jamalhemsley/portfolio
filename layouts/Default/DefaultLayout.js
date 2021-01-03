import React from 'react';
import PropTypes from 'prop-types';
import { Header, Footer } from 'components/global';

import styles from './DefaultLayout.module.scss';

const DefaultLayout = ({ children, siteSettings }) => (
  <div className={styles.DefaultLayout}>
    <Header
      menu={siteSettings.data.header_menu}
      socialProfiles={siteSettings.data.social_profiles}
    />
    <main className={styles.DefaultLayout__main}>{children}</main>
    <Footer
      title={siteSettings.data.footer_title}
      text={siteSettings.data.footer_text}
      author={siteSettings.data.author}
      repository={siteSettings.data.repository}
      socialProfiles={siteSettings.data.social_profiles}
    />
  </div>
);

DefaultLayout.propTypes = {
  children: PropTypes.node,
  siteSettings: PropTypes.shape({}),
};

export default DefaultLayout;
