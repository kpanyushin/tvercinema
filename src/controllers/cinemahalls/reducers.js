import {
  SET_CINEMAHALLS,
  CHANGE_CINEMAHALL,
  DELETE_CINEMAHALL,
} from './actions';

const initialState = {
  cinemaHalls: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_CINEMAHALLS:
      return {
        ...state,
        cinemaHalls: payload,
      };

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
