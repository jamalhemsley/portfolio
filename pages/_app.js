import React from 'react';
import PropTypes from 'prop-types';

import 'styles/global.scss';

function App({ Component, pageProps, router }) {
  return <Component {...pageProps} key={router.route} />;
}

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
};

App.defaultProps = {
  pageProps: {},
};

export default App;
