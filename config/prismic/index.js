// Prismic API Endpoint
export const apiEndpoint = process.env.API_ENDPOINT;

// Prismic API Access Token
export const accessToken = process.env.API_ACCESS_TOKEN;

// Internal Link Resolution
export const linkResolver = (doc) => {
  if (doc.type === 'home') return '/';
  if (doc.type === 'page') return `/${doc.uid}`;
  if (doc.type === 'work') return `/work/${doc.uid}`;

  return '/';
};

// Additional helper function Next/Link Components
export const hrefResolver = (doc) => {
  if (doc.type === 'home') return '/';
  if (doc.type === 'page') return '/[uid]';
  if (doc.type === 'work') return '/work/[uid]';

  return '/';
};
