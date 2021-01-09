import React from 'react';
import PropTypes from 'prop-types';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithub, faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import {
  faBars,
  faChevronDown,
  faChevronRight,
  faComment,
  faLongArrowAltRight,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';

// Import Global and Critical CSS
import 'styles/global.scss';
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css';

// Load in FontAwesome Icon Library
library.add(
  faGithub,
  faGithubAlt,
  faBars,
  faChevronDown,
  faChevronRight,
  faComment,
  faLongArrowAltRight,
  faPaperPlane
);

const App = ({ Component, pageProps }) => (
  <>
    <Component {...pageProps} />
  </>
);

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
