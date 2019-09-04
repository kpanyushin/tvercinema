import { createSelector } from 'reselect';

import { denormalizedMovies } from '_schemas/movies';

import { rootSelector } from '../index';

const moviesRootSelector = createSelector(
  rootSelector,
  ({ movies }) => movies,
);

export const moviesSelector = createSelector(
  moviesRootSelector,
  ({ movies = {} }) => movies,
);

export const movieSelector = createSelector(
  moviesSelector,
  (_, id) => id,
  (movies, id) => movies[id],
);

export const moviesIdsSelector = createSelector(
  moviesRootSelector,
  ({ moviesIds }) => moviesIds,
);

export const denormalizedMoviesSelector = createSelector(
  moviesIdsSelector,
  moviesSelector,
  (moviesIds, movies) => {
    if (!moviesIds.length) return [];
    const moviesDenormalized = denormalizedMovies(moviesIds, { movies });

    return moviesDenormalized;
  },
);
