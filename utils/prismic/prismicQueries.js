import Prismic from '@prismicio/client';
import { PrismicClient as Client } from './prismicClient';

export const PrismicQueries = {
  fetchAllPages: fetchAllPages(),
  fetchAllWork: fetchAllWork(),
};

export default PrismicQueries;

async function fetchAllPages(page = 1, routes = []) {
  const response = await Client().query(
    Prismic.Predicates.at('document.type', 'page'),
    {
      pageSize: 100,
      page,
    }
  );
  const allRoutes = routes.concat(response.results);

  if (response.results_size + routes.length < response.total_results_size) {
    return fetchAllPages(page + 1, allRoutes);
  }

  return [...new Set(allRoutes)];
}

async function fetchAllWork(page = 1, routes = []) {
  const response = await Client().query(
    Prismic.Predicates.at('document.type', 'work'),
    {
      pageSize: 100,
      page,
    }
  );
  const allRoutes = routes.concat(response.results);

  if (response.results_size + routes.length < response.total_results_size) {
    return fetchAllWork(page + 1, allRoutes);
  }

  return [...new Set(allRoutes)];
}
