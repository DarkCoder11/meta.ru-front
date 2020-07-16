import React from 'react';
import PropTypes from 'prop-types';

import { getRating } from 'store/actions/ratingAction';
import {
  getMovieInfo,
  getMovieActors,
  getMovieCinemas,
} from 'store/actions/movieAction';

import { HelmetWrapper, FilmLayout } from 'layouts/index';
import { ActorsContainer } from 'containers/index';

const ActorsPage = ({ name, shortDescription }) => (
  <HelmetWrapper title={name} metaDescription={shortDescription}>
    <FilmLayout>
      <ActorsContainer />
    </FilmLayout>
  </HelmetWrapper>
);

ActorsPage.getInitialProps = async ({ reduxStore, query }) => {
  const { movieSlug } = query;
  const { dispatch } = reduxStore;

  const { name, description } = await dispatch(getMovieInfo(movieSlug));

  await dispatch(getMovieCinemas(movieSlug));
  await dispatch(getMovieActors(movieSlug, 5));
  await dispatch(getRating('ru_net'));

  const shortDescription = `${description
    .split(/\s+/)
    .slice(0, 10)
    .join(' ')}...`;

  return { name, shortDescription };
};

ActorsPage.propTypes = {
  name: PropTypes.string.isRequired,
  shortDescription: PropTypes.string.isRequired,
};

export default ActorsPage;
