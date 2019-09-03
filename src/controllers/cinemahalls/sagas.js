import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  fetchHallExternal as fetchHallApi,
  fetchHallsExternal as fetchHallsApi,
} from '_api';

import {
  SET_CINEMAHALLS,
  FETCH_CINEMAHALL,
  FETCH_CINEMAHALLS,
} from './actions';

export function* fetchCinemaHalls() {
  try {
    const response = yield call(fetchHallsApi);

    yield put(createAction(SET_CINEMAHALLS)(response.data));
  } catch (err) {
    console.error(err);
  }
}

export function* fetchCinemaHall({ payload }) {
  try {
    const response = yield call(fetchHallApi, payload);

    yield put(createAction(SET_CINEMAHALLS)([response.data]));
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(FETCH_CINEMAHALL, fetchCinemaHall),
    takeLatest(FETCH_CINEMAHALLS, fetchCinemaHalls),
  ]);
}
