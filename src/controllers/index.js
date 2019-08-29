import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

/* reducers */
import usersReducer from './users/reducers';
import moviesReducer from './movies/reducers';
/* reducers */

/* sagas */
import usersSagas from './users/sagas';
import moviesSagas from './movies/sagas';
/* sagas */

export const createRootReducer = history => combineReducers({
  router: connectRouter(history),
  movies: moviesReducer,
  users: usersReducer,
  intl: intlReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([
    moviesSagas(),
    usersSagas(),
  ]);
};

export const rootSelector = state => state;
