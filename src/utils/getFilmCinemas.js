const getFilmCinemas = (cinemas) => {
  const filmCinemas = cinemas.filter(
    (cinema) =>
      !(cinema.cinema.achievement && cinema.cinema.achievement.length),
  );

  return filmCinemas;
};

export default getFilmCinemas;
