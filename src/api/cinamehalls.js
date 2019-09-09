import Req from './request';

export const fetchHalls = () =>
  Req.GET({
    url: '/auditoria',
  });

export const fetchHall = id =>
  Req.GET({
    url: `/auditoria/${id}`,
  });

export const addHall = data =>
  Req.POST({
    url: '/auditoria',
    params: { data },
  });

export const changeHall = (data, id) =>
  Req.PUT({
    url: `/auditoria/${id}`,
    params: { data },
  });

export const deleteHall = id =>
  Req.DELETE({
    url: `/auditoria/${id}`,
  });
