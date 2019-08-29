import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  fetchMovieExternal as fetchMovieApi,
  fetchMoviesExternal as fetchMoviesApi,
} from '_api';

import {
  SET_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIES,
} from './actions';

export function* fetchMovies() {
  try {
    console.log('pew');
    const response = yield call(fetchMoviesApi);
    yield put(createAction(SET_MOVIES)(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* fetchMovie({ payload }) {
  try {
    const response = yield call(fetchMovieApi, payload);
    yield put(createAction(SET_MOVIES)([response.data]));
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_MOVIE, fetchMovie),
    takeLatest(FETCH_MOVIES, fetchMovies),
  ]);
}
