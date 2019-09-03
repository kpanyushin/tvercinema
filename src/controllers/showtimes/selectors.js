import { createSelector } from 'reselect';

import { rootSelector } from '../index';

export const showtimesSelector = createSelector(
  rootSelector,
  ({ showtimes }) => showtimes.showtimes,
);

export const showtimeSelector = createSelector(
  showtimesSelector,
  (_, id) => id,
  (showtimes, id) => showtimes.showtimes[id],
);
