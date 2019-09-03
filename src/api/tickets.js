import Req, { externalRequest } from './request';

export const fetchTicketExternal = id =>
  externalRequest(`http://tvercinema.herokuapp.com/api/v1/tickets/${id}`, {});

export const fetchTicketsExternal = () =>
  externalRequest('http://tvercinema.herokuapp.com/api/v1/tickets', {});

export const fetchTickets = () =>
  Req.GET({
    url: '/tickets',
  });

export const fetchTicket = id =>
  Req.GET({
    url: `/tickets/${id}`,
  });

export const addTicket = data =>
  Req.POST({
    url: '/tickets',
    params: { data },
  });

export const changeTicket = (data, id) =>
  Req.PUT({
    url: `/tickets/${id}`,
    params: { data },
  });

export const deleteTicket = id =>
  Req.DELETE({
    url: `/tickets/${id}`,
  });
