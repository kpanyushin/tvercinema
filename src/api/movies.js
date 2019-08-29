import Req from './request';

export const fetchMovies = () =>
  Req.GET({
    url: '/movies',
  });

export const fetchMovie = id =>
  Req.GET({
    url: `/movies/${id}`,
  });

export const addMovie = data =>
  Req.POST({
    url: '/movies',
    params: { data },
  });

export const changeMovie = (data, id) =>
  Req.PUT({
    url: `/movies/${id}`,
    params: { data },
  });

export const deleteMovie = id =>
  Req.DELETE({
    url: `/movies/${id}`,
  });
