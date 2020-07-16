const getFilmBestCinemas = (cinemas) => {
  const filmBestCinemas = cinemas.filter(
    (cinema) => cinema.cinema.achievement && !!cinema.cinema.achievement.length,
  );
  return filmBestCinemas;
};

export default getFilmBestCinemas;
