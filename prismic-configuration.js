// Prismic API Endpoint
export const apiEndpoint = 'https://digitalheat.cdn.prismic.io/api/v2';

// Prismic API Access Token
export const accessToken = '';

// Internal Link Resolution
export const linkResolver = (doc) => {
  if (doc.type === 'home') return '/';
  if (doc.type === 'page') return `/${doc.uid}`;
  if (doc.type === 'work') return `/work/${doc.uid}`;

  return '/';
};

// Next/Link Component Resolution
export const hrefResolver = (doc) => {
  if (doc.type === 'home') return '/';
  if (doc.type === 'page') return '/[uid]';
  if (doc.type === 'work') return `/work/[uid]`;

  return '/';
};
