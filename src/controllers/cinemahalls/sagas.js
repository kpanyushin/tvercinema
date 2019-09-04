import { takeLatest, all, put, call } from 'redux-saga/effects';

import createAction from '_utils/createAction';

import {
  addHall as addHallApi,
  fetchHall as fetchHallApi,
  fetchHalls as fetchHallsApi,
  changeHall as changeHallApi,
  deleteHall as deleteHallApi,
} from '_api';

import {
  ADD_CINEMAHALL,
  SET_CINEMAHALLS,
  FETCH_CINEMAHALL,
  FETCH_CINEMAHALLS,
  CHANGE_CINEMAHALL,
  DELETE_CINEMAHALL,
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

export function* changeCinemaHall({ payload }) {
  try {
    yield call(changeHallApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* addCinemaHall({ payload }) {
  try {
    yield call(addHallApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export function* deleteCinemaHall({ payload }) {
  try {
    yield call(deleteHallApi, payload);
  } catch (err) {
    console.error(err);
  }
}

export default function* () {
  yield all([
    takeLatest(ADD_CINEMAHALL, addCinemaHall),
    takeLatest(FETCH_CINEMAHALL, fetchCinemaHall),
    takeLatest(CHANGE_CINEMAHALL, changeCinemaHall),
    takeLatest(DELETE_CINEMAHALL, deleteCinemaHall),
    takeLatest(FETCH_CINEMAHALLS, fetchCinemaHalls),
  ]);
}
