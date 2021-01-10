import Prismic from '@prismicio/client';
import { accessToken, apiEndpoint } from 'config/prismic';

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};

  return {
    ...reqOption,
    ...accessTokenOption,
  };
};

const PrismicClient = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

export default PrismicClient;
