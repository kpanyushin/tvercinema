import { createSelector } from 'reselect';

import { rootSelector } from '../index';

export const usersSelector = createSelector(
  rootSelector,
  ({ users }) => users.list,
);

export const currentUserSelector = createSelector(
  rootSelector,
  ({ users }) => users.current,
);
