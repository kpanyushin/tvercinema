import {
  SET_MOVIES,
  CHANGE_MOVIE,
  DELETE_MOVIE,
} from './actions';

const initialState = {
  movies: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES:
      return {
        ...state,
        movies: payload,
      };

    case CHANGE_MOVIE: {
      return {
        ...state,
        movies: payload,
      };
    }

    case DELETE_MOVIE: {
      const { id } = payload;
      const { movies } = state;

      return {
        ...state,
        movies: movies.filter(movie => movie.id !== id),
      };
    }

    default:
      return state;
  }
};
