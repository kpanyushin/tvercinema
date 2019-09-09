import Req from './request';

export const fetchShowtimes = () =>
  Req.GET({
    url: '/showtimes',
  });

export const fetchShowtime = id =>
  Req.GET({
    url: `/showtimes/${id}`,
  });

export const addShowtime = data =>
  Req.POST({
    url: '/showtimes',
    params: { data },
  });

export const changeShowtime = (data, id) =>
  Req.PUT({
    url: `/showtimes/${id}`,
    params: { data },
  });

export const deleteShowtime = id =>
  Req.DELETE({
    url: `/showtimes/${id}`,
  });
