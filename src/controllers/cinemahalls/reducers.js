import _union from 'lodash/union';

import { normalizedCinemaHalls } from '_schemas/cinemahalls';
import { merge } from '_utils/merge';

import {
  SET_CINEMAHALLS,
  CHANGE_CINEMAHALL,
  DELETE_CINEMAHALL,
} from './actions';

const initialState = {
  cinemaHalls: {},
  cinemaHallsIds: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CINEMAHALLS: {
      const { entities, result } = normalizedCinemaHalls(payload);
      const cinemaHallsData = merge(state.cinemaHalls, entities.cinemaHall);
      const cinemaHallsIds = _union(state.cinemaHallsIds, result);

      return {
        ...state,
        cinemaHalls: cinemaHallsData,
        cinemaHallsIds,
      };
    }

    case CHANGE_CINEMAHALL: {
      return {
        ...state,
        cinemaHalls: payload,
      };
    }

    case DELETE_CINEMAHALL: {
      const { id } = payload;
      const { cinemaHalls } = state;

      return {
        ...state,
        cinemaHalls: cinemaHalls.filter(ch => ch.id !== id),
      };
    }

    default:
      return state;
  }
};
