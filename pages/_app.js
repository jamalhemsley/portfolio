import React from 'react';
import PropTypes from 'prop-types';

// Import Global CSS
import 'styles/global.scss';

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
