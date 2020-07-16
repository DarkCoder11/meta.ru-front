import React from 'react';

import { getRating } from 'store/actions/ratingAction';
import { getMovieInfo } from 'store/actions/movieAction';

import { HelmetWrapper, FilmLayout } from 'layouts/index';
import { PrizesContainer } from 'containers/index';

const AwardsPage = () => (
  <HelmetWrapper title="Аватар " metaDescription="Аватар (2009)">
    <FilmLayout>
      <PrizesContainer />
    </FilmLayout>
  </HelmetWrapper>
);

AwardsPage.getInitialProps = async ({ reduxStore, query }) => {
  const { movieSlug } = query;
  const { dispatch } = reduxStore;

  try {
    await dispatch(getMovieInfo(movieSlug));
    await dispatch(getRating('ru_net'));

    return {};
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

export default AwardsPage;
