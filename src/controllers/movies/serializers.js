export function movieSerializer(data) {
  const {
    created_at, // eslint-disable-line
    updated_at, // eslint-disable-line
    ...other
  } = data;

  return { ...other };
}

export function moviesSerializer(data) {
  return data.map(movie => movieSerializer(movie));
}
