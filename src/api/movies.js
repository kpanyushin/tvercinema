import Req from './request';

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
