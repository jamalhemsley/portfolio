import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
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
import { AnimatePresence } from 'framer-motion';

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

const App = ({ Component, pageProps, router }) => {
  const nextRouter = useRouter();

  useEffect(() => {
    const onChangeRoute = async () => {
      // eslint-disable-next-line no-underscore-dangle
      const currentPath = await router._inFlightRoute;
      const nextPath = nextRouter.asPath;

      if (currentPath === nextPath) {
        document.documentElement.removeAttribute('style');

        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        });
      } else {
        document.documentElement.style.cssText +=
          '; scroll-behavior: auto !important;';

        setTimeout(() => {
          window.scroll({
            top: 0,
            left: 0,
            behavior: 'auto',
          });

          document.documentElement.removeAttribute('style');
        }, 700);
      }
    };

    nextRouter.events.on('beforeHistoryChange', onChangeRoute);

    return () => {
      nextRouter.events.off('beforeHistoryChange', onChangeRoute);
    };
  }, [nextRouter, router]);

  return (
    <AnimatePresence exitBeforeEnter>
      <Component {...pageProps} key={router.route} />
    </AnimatePresence>
  );
};

App.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}),
  router: PropTypes.shape({
    route: PropTypes.string,
    _inFlightRoute: PropTypes.string,
  }),
};

App.defaultProps = {
  pageProps: {},
  router: '',
};

export default App;
