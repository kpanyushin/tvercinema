import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  fetchShowtimeExternal as fetchShowtimeApi,
  fetchShowtimesExternal as fetchShowtimesApi,
} from '_api';

import {
  SET_SHOWTIMES,
  FETCH_SHOWTIME,
  FETCH_SHOWTIMES,
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

export default function* () {
  yield all([
    takeLatest(FETCH_SHOWTIME, fetchShowtime),
    takeLatest(FETCH_SHOWTIMES, fetchShowtimes),
  ]);
}
