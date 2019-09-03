import { createSelector } from 'reselect';

import { rootSelector } from '../index';

export const cinemaHallsSelector = createSelector(
  rootSelector,
  ({ cinemaHalls }) => cinemaHalls.cinemaHalls,
);

export const cinemaHallSelector = createSelector(
  cinemaHallsSelector,
  (_, id) => id,
  (cinemaHalls, id) => cinemaHalls.cinemaHalls[id],
);
