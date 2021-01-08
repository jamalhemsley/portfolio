import Prismic from '@prismicio/client';
import PrismicClient from './prismicClient';

async function fetchAllPages(page = 1, routes = []) {
  const response = await PrismicClient().query(
    Prismic.Predicates.at('document.type', 'page'),
    {
      pageSize: 20,
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
  const response = await PrismicClient().query(
    Prismic.Predicates.at('document.type', 'work'),
    {
      orderings: '[my.work.date desc]',
      pageSize: 20,
      page,
    }
  );
  const allRoutes = routes.concat(response.results);

  if (response.results_size + routes.length < response.total_results_size) {
    return fetchAllWork(page + 1, allRoutes);
  }

  return [...new Set(allRoutes)];
}

export const PrismicQueries = {
  fetchAllPages: fetchAllPages(),
  fetchAllWork: fetchAllWork(),
};

export default PrismicQueries;
