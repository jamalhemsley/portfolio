const path = require('path');

module.exports = {
  poweredByHeader: false,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};
