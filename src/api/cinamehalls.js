import Req from './request';

export const fetchHalls = () =>
  Req.GET({
    url: '/auditoria',
  });

export const fetchHall = id =>
  Req.GET({
    url: `/auditoria/${id}`,
  });

export const addHall = ({ id, ...data }) =>
  Req.POST({
    url: '/auditoria',
    data,
  });

export const changeHall = ({ id, ...data }) =>
  Req.PUT({
    url: `/auditoria/${id}`,
    data,
  });

export const deleteHall = id =>
  Req.DELETE({
    url: `/auditoria/${id}`,
  });
