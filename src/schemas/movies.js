import { normalize, denormalize, schema } from 'normalizr';

const showtime = new schema.Entity('showtimes');
const movie = new schema.Entity('movies', {
  showtimes: [showtime],
});

const showtimes = new schema.Array(showtime);
const movies = new schema.Array(movie);

export const normalizedMovies = originalData =>
  normalize(originalData, movies);

export const denormalizedMovies = (result, entities) =>
  denormalize(result, movies, entities);

export const normalizedShowtimes = originalData =>
  normalize(originalData, showtimes);

export const denormalizedShowtimes = (result, entities) =>
  denormalize(result, showtimes, entities);
