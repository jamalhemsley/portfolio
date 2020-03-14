require('./src/assets/scss/global.scss');

exports.onClientEntry = () => {
    // Load polyfill for `gatsby-image` for IE11 and Edge Users
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        document.write(
            '<script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CSymbol" />'
        );
    }

    // Require `smooth-scroll` to enable smooth scrolling for IE/Safari.
    if (
        typeof window !== 'undefined' &&
        !CSS.supports('scroll-behavior', 'smooth')
    ) {
        // eslint-disable-next-line global-require
        require('smooth-scroll')('a[href*="#"]', {
            speed: 400,
            easing: 'easeInOutCubic',
            updateURL: true,
            popstate: true,
        });
    }
};
