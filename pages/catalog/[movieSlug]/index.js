import React from 'react';
import PropTypes from 'prop-types';

import { FilmRightContainer } from 'containers/index';
import { HelmetWrapper, FilmLayout } from 'layouts/index';
import { getRating } from 'store/actions/ratingAction';
import {
  getMovieInfo,
  getMovieActors,
  getMovieCinemas,
  getMovieTrailers,
} from 'store/actions/movieAction';

const MoviePage = ({ name, shortDescription }) => (
  <HelmetWrapper title={name} metaDescription={shortDescription}>
    <FilmLayout>
      <FilmRightContainer />
    </FilmLayout>
  </HelmetWrapper>
);

MoviePage.getInitialProps = async ({ reduxStore, query }) => {
  const { movieSlug } = query;
  const { dispatch } = reduxStore;

  try {
    const { name, description } = await dispatch(getMovieInfo(movieSlug));
    await dispatch(getMovieCinemas(movieSlug));
    await dispatch(getMovieActors(movieSlug, 5));
    await dispatch(getMovieTrailers(movieSlug, 3));
    await dispatch(getRating('ru_net'));

    const shortDescription = `${description
      .split(/\s+/)
      .slice(0, 10)
      .join(' ')}...`;

    return { name, shortDescription };
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

MoviePage.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default MoviePage;
