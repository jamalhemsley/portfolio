import React from 'react';
import { apiEndpoint } from 'config/prismic';

const PrismicScript = () => {
  const [, repoName] = apiEndpoint.match(/https?:\/\/([^.]+)?\.(cdn\.)?.+/);

  return (
    <script
      async
      defer
      src={`https://static.cdn.prismic.io/prismic.min.js?repo=${repoName}&new=true`}
    />
  );
};

export default PrismicScript;
