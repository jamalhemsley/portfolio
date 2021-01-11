/* eslint-disable no-param-reassign */

const path = require('path');

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  poweredByHeader: false,
  webpack(config) {
    const initialEntry = config.entry;

    config.entry = async () => {
      const entries = await initialEntry();

      if (
        entries['main.js'] &&
        !entries['main.js'].includes('./client/polyfills.js')
      ) {
        entries['main.js'].unshift('./client/polyfills.js');
      }

      return entries;
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    // Allow module/stylesheet imports without relative paths.
    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
