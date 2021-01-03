import Prismic from '@prismicio/client';
import { accessToken, apiEndpoint } from 'prismic-configuration';

// Client method to query Prismic repository.
export const PrismicClient = (req = null) =>
  Prismic.client(apiEndpoint, createClientOptions(req, accessToken));

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

export default PrismicClient;
