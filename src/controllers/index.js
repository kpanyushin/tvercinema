import { combineReducers } from 'redux';
import { intlReducer } from 'react-intl-redux';
import { connectRouter } from 'connected-react-router';
import { all } from 'redux-saga/effects';

/* reducers */
import usersReducer from './users/reducers';
import moviesReducer from './movies/reducers';
import showtimesReducer from './showtimes/reducers';
import cinemaHallsReducer from './cinemahalls/reducers';
/* reducers */

/* sagas */
import usersSagas from './users/sagas';
import moviesSagas from './movies/sagas';
import showtimesSagas from './showtimes/sagas';
import cinemaHallsSagas from './cinemahalls/sagas';
/* sagas */

export const createRootReducer = history => combineReducers({
  cinemaHalls: cinemaHallsReducer,
  router: connectRouter(history),
  showtimes: showtimesReducer,
  movies: moviesReducer,
  users: usersReducer,
  intl: intlReducer,
});

export const rootSaga = function* rootSaga() {
  yield all([
    cinemaHallsSagas(),
    showtimesSagas(),
    moviesSagas(),
    usersSagas(),
  ]);
};

export const rootSelector = state => state;
