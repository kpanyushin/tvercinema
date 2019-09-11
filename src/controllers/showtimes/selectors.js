import { createSelector } from 'reselect';

import { rootSelector } from '../index';

const showtimesRootReducer = createSelector(
  rootSelector,
  ({ showtimes }) => showtimes,
);

export const showtimesSelector = createSelector(
  showtimesRootReducer,
  ({ showtimes }) => showtimes,
);

export const showtimeSelector = createSelector(
  showtimesSelector,
  (_, id) => id,
  (showtimes, id) => showtimes[id],
);
