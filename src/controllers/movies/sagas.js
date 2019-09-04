import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  addMovie as addMovieApi,
  fetchMovie as fetchMovieApi,
  fetchMovies as fetchMoviesApi,
  changeMovie as changeMovieApi,
  deleteMovie as deleteMovieApi,
} from '_api';

import {
  ADD_MOVIE,
  SET_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIES,
  CHANGE_MOVIE,
  DELETE_MOVIE,
} from './actions';

import { moviesSerializer, movieSerializer } from './serializers';

export function* fetchMovies() {
  try {
    const response = yield call(fetchMoviesApi);
    const movies = moviesSerializer(response.data);

    yield put(createAction(SET_MOVIES)(movies));
  } catch (err) {
    console.error(err);
  }
}

export function* fetchMovie({ payload }) {
  try {
    const response = yield call(fetchMovieApi, payload);
    const movie = movieSerializer(response.data);

    yield put(createAction(SET_MOVIES)([movie]));
  } catch (err) {
    console.error(err);
  }
}

export function* changeMovie({ payload }) {
  try {
    yield call(changeMovieApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* addMovie({ payload }) {
  try {
    yield call(addMovieApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* deleteMovie({ payload }) {
  try {
    yield call(deleteMovieApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(ADD_MOVIE, addMovie),
    takeLatest(FETCH_MOVIE, fetchMovie),
    takeLatest(FETCH_MOVIES, fetchMovies),
    takeLatest(CHANGE_MOVIE, changeMovie),
    takeLatest(DELETE_MOVIE, deleteMovie),
  ]);
}
