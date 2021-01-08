import React from 'react';
import PropTypes from 'prop-types';

// Import Global CSS & Critical Components
import 'styles/global.scss';
import '../components/global/Header/Header.module.scss';
import '../layouts/Default/DefaultLayout.module.scss';
import '../components/common/Button/Button.module.scss';
import '../components/common/ButtonGroup/ButtonGroup.module.scss';

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
