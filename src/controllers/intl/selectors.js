import { createSelector } from 'reselect';

export const intlRootSelector = createSelector(
  state => state,
  ({ intl }) => intl,
);

export const localeSelector = createSelector(
  intlRootSelector,
  ({ locale }) => locale,
);

export const messagesSelector = createSelector(
  intlRootSelector,
  ({ messages }) => messages,
);
