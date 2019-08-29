import { createSelector } from 'reselect';

import { rootSelector } from '../index';

export const moviesSelector = createSelector(
  rootSelector,
  ({ movies }) => movies.movies,
);

export const movieSelector = createSelector(
  moviesSelector,
  (_, id) => id,
  (movies, id) => movies.movies[id],
);
