import _union from 'lodash/union';

import { normalizedMovies } from '_schemas/movies';
import { merge } from '_utils/merge';

import {
  SET_MOVIES,
  CHANGE_MOVIE,
  DELETE_MOVIE,
} from './actions';


const initialState = {
  movies: {},
  moviesIds: [],
  showtimes: {},
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
      // const { movieData, id } = payload;

      // return {
      //   ...state,
      //   channels: {
      //     ...state.channels,
      //     [channelId]: {
      //       ...state.channels[channelId],
      //       ...channelData,
      //     },
      //   },
      // };
      return {
        ...state,
        movies: state.movies,
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
