import { createSelector } from 'reselect';

import { denormalizedCinemaHalls } from '_schemas/cinemahalls';

import { rootSelector } from '../index';

const cinemaHallsRootSelector = createSelector(
  rootSelector,
  ({ cinemaHalls }) => cinemaHalls,
);

export const cinemaHallsSelector = createSelector(
  cinemaHallsRootSelector,
  ({ cinemaHalls = {} }) => cinemaHalls,
);

export const cinemaHallSelector = createSelector(
  cinemaHallsSelector,
  (_, id) => id,
  (cinemaHalls, id) => cinemaHalls[id],
);

export const cinemaHallsIdsSelector = createSelector(
  cinemaHallsRootSelector,
  ({ cinemaHallsIds }) => cinemaHallsIds,
);

export const denormalizedMoviesSelector = createSelector(
  cinemaHallsIdsSelector,
  cinemaHallsSelector,
  (cinemaHallsIds, cinemaHalls) => {
    if (!cinemaHallsIds.length) return [];
    const cinemaHallsDenormalized = denormalizedCinemaHalls(cinemaHallsIds, { cinemaHalls });

    return cinemaHallsDenormalized;
  },
);
