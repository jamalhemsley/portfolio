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
//import { fixTimeoutTransition } from 'utils/dom';

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

// const TRANSITION_DURATION = 700;

//fixTimeoutTransition(TRANSITION_DURATION);

const App = ({ Component, pageProps, router }) => {
  const nextRouter = useRouter();

  useEffect(() => {
    const changeRouteDelay = async () => {
      setTimeout(() => {
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'auto',
        });
      }, 700);
    };

    /*const patchUnstyledFlash = () => {
      // Temporary fix to avoid flash of unstyled content
      // during route transitions. Keep an eye on this
      // issue and remove this code when resolved:
      // https://github.com/vercel/next.js/issues/17464
      const tempFix = () => {
        const allStyleElems = document.querySelectorAll('style[media="x"]');
        allStyleElems.forEach((elem) => {
          elem.removeAttribute('media');
        });
      };

      tempFix();
    };

    nextRouter.events.on('routeChangeComplete', patchUnstyledFlash);
    nextRouter.events.on('routeChangeStart', patchUnstyledFlash);*/
    nextRouter.events.on('beforeHistoryChange', changeRouteDelay);

    return () => {
      nextRouter.events.off('routeChangeComplete', patchUnstyledFlash);
      nextRouter.events.off('routeChangeStart', patchUnstyledFlash);
      nextRouter.events.off('beforeHistoryChange', changeRouteDelay);
    };
  }, [nextRouter.events]);

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
  }),
};

App.defaultProps = {
  pageProps: {},
  router: '',
};

export default App;
