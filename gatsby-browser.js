require('./src/assets/scss/global.scss');

exports.onClientEntry = () => {
    if (/MSIE \d|Trident.*rv:/.test(navigator.userAgent)) {
        document.write(
            '<script src="https://polyfill.io/v3/polyfill.min.js?features=default%2CSymbol" />'
        );
    }
};
