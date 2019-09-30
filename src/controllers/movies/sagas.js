import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  addMovie as addMovieApi,
  fetchMovie as fetchMovieApi,
  fetchMovies as fetchMoviesApi,
  changeMovie as changeMovieApi,
  deleteMovie as deleteMovieApi,
  fetchMovieShowtimes as fetchMovieShowtimesApi,
} from '_api';

import {
  ADD_MOVIE,
  SET_MOVIES,
  FETCH_MOVIE,
  FETCH_MOVIES,
  CHANGE_MOVIE,
  DELETE_MOVIE,
  SET_MOVIE_SHOWTIMES,
} from './actions';

import { ADD_MESSAGE } from '_controllers/messages/actions';

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
    const movieResponse = yield call(fetchMovieApi, payload);
    const { status, data } = movieResponse;
    const movie = movieSerializer(data);

    yield put(createAction(SET_MOVIES)([movie]));

    if (status === 200) {
      const showtimesResponse = yield call(fetchMovieShowtimesApi, data.id);
      const { data: showtimesData } = showtimesResponse;

      yield put(createAction(SET_MOVIE_SHOWTIMES)({ movieId: data.id, showtimes: showtimesData }));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* changeMovie({ payload }) {
  try {
    const response = yield call(changeMovieApi, payload);
    const { status } = response;

    if (status === 200) {
      yield put(createAction(ADD_MESSAGE)({
        id: 'successChange',
        type: 'success',
        header: 'success',
        message: 'the movie has been changed successfully',
      }));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* addMovie({ payload }) {
  try {
    const response = yield call(addMovieApi, payload);
    const { status } = response;

    if (status === 200) {
      yield put(createAction(SET_MOVIES)([payload]));
      yield put(createAction(ADD_MESSAGE)({
        id: 'successAdd',
        type: 'success',
        header: 'success',
        message: 'the movie has been added successfully',
      }));
    }
  } catch (err) {
    console.error(err);
  }
}

export function* deleteMovie({ payload }) {
  try {
    yield call(deleteMovieApi, payload);
    yield put(createAction(ADD_MESSAGE)({
      id: 'successDelete',
      type: 'success',
      header: 'success',
      message: 'the movie has been removed successfully',
    }));
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
