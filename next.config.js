const path = require('path');

module.exports = {
  poweredByHeader: false,
  webpack(config) {
    const originalEntry = config.entry;
    config.entry = async () => {
      const entries = await originalEntry();
      if (entries['main.js']) {
        entries['main.js'].unshift('./utils/dom/useSmoothScroll.js');
      }
      return entries;
    };

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.resolve.modules.push(path.resolve('./'));

    return config;
  },
};
