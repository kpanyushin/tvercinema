import _union from 'lodash/union';

import { normalizedMovies, normalizedShowtimes } from '_schemas/movies';
import { merge } from '_utils/merge';

import {
  SET_MOVIES,
  CHANGE_MOVIE,
  DELETE_MOVIE,
  SET_MOVIE_SHOWTIMES,
} from './actions';


const initialState = {
  movies: {},
  moviesIds: [],
  showtimesIds: [],
};

export default (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_MOVIES: {
      const { entities, result } = normalizedMovies(payload);
      const moviesData = merge(state.movies, entities.movies);
      const moviesIds = _union(state.moviesIds, result);

      return {
        ...state,
        movies: moviesData,
        moviesIds,
      };
    }

    case CHANGE_MOVIE: {
      const { movieData, id } = payload;

      return {
        ...state,
        channels: {
          ...state.channels,
          [id]: {
            ...state.movies[id],
            ...movieData,
          },
        },
      };
    }

    case DELETE_MOVIE: {
      const { moviesIds } = state;
      const newMoviesIds = moviesIds.filter(movieId => movieId !== Number(payload));

      return {
        ...state,
        moviesIds: newMoviesIds,
      };
    }

    case SET_MOVIE_SHOWTIMES: {
      const { movies } = state;
      const { movieId, showtimes } = payload;
      const { result } = normalizedShowtimes(showtimes);

      return {
        ...state,
        movies: {
          ...movies,
          [movieId]: {
            ...movies[movieId],
            showtimesIds: result,
          },
        },
      };
    }

    default:
      return state;
  }
};
