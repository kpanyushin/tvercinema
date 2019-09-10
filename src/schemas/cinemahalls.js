import { normalize, denormalize, schema } from 'normalizr';

const cinemaHall = new schema.Entity('cinemaHall');

const cinemaHalls = new schema.Array(cinemaHall);

export const normalizedCinemaHalls = originalData =>
  normalize(originalData, cinemaHalls);

export const denormalizedCinemaHalls = (result, entities) =>
  denormalize(result, cinemaHalls, entities);
