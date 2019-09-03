import {
  SET_SHOWTIMES,
  CHANGE_SHOWTIME,
  DELETE_SHOWTIME,
} from './actions';

const initialState = {
  showtimes: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SHOWTIMES:
      return {
        ...state,
        showtimes: payload,
      };

    case CHANGE_SHOWTIME: {
      return {
        ...state,
        showtimes: payload,
      };
    }

    case DELETE_SHOWTIME: {
      const { id } = payload;
      const { showtimes } = state;

      return {
        ...state,
        showtimes: showtimes.filter(showtime => showtime.id !== id),
      };
    }

    default:
      return state;
  }
};
