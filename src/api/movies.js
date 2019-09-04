import Req, { externalRequest } from './request';

export const fetchMovieExternal = id =>
  externalRequest(`https://tvercinema.herokuapp.com/api/v1/movies/${id}`, {});

export const fetchMoviesExternal = () =>
  externalRequest('https://tvercinema.herokuapp.com/api/v1/movies', {});

export const fetchMovies = () =>
  Req.GET({
    url: '/movies',
  });

export const fetchMovie = id =>
  Req.GET({
    url: `/movies/${id}`,
  });

export const addMovie = ({ id, ...data }) =>
  Req.POST({
    url: '/movies',
    data,
  });

export const changeMovie = ({ id, ...data }) =>
  Req.PUT({
    url: `/movies/${id}`,
    data,
  });

export const deleteMovie = id =>
  Req.DELETE({
    url: `/movies/${id}`,
  });
