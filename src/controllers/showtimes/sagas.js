import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  addShowtime as addShowtimeApi,
  fetchShowtime as fetchShowtimeApi,
  fetchShowtimes as fetchShowtimesApi,
  changeShowtime as changeShowtimeApi,
  deleteShowtime as deleteShowtimeApi,
} from '_api';

import {
  ADD_SHOWTIME,
  SET_SHOWTIMES,
  FETCH_SHOWTIME,
  FETCH_SHOWTIMES,
  CHANGE_SHOWTIME,
  DELETE_SHOWTIME,
} from './actions';

export function* fetchShowtimes() {
  try {
    const response = yield call(fetchShowtimesApi);

    yield put(createAction(SET_SHOWTIMES)(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* fetchShowtime({ payload }) {
  try {
    const response = yield call(fetchShowtimeApi, payload);

    yield put(createAction(SET_SHOWTIMES)([response.data]));
  } catch (err) {
    console.error(err);
  }
}

export function* changeShowtime({ payload }) {
  try {
    yield call(changeShowtimeApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* addShowtime({ payload }) {
  try {
    yield call(addShowtimeApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* deleteShowtime({ payload }) {
  try {
    yield call(deleteShowtimeApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(ADD_SHOWTIME, addShowtime),
    takeLatest(FETCH_SHOWTIME, fetchShowtime),
    takeLatest(CHANGE_SHOWTIME, changeShowtime),
    takeLatest(DELETE_SHOWTIME, deleteShowtime),
    takeLatest(FETCH_SHOWTIMES, fetchShowtimes),
  ]);
}
