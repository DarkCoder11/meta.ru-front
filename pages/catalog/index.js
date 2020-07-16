import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { generatePageError } from 'next-with-error';

import { constants } from 'utils/index';
import { MoviesContainer } from 'containers/index';
import { HelmetWrapper, MainLayout } from 'layouts';
import { getRating } from 'store/actions/ratingAction';
import { getMovies } from 'store/actions/moviesAction';

const CatalogPage = ({ isServer, query }) => {
  const dispatch = useDispatch();
  const { page, search } = query;

  const fetchMoviesCSR = async () => {
    try {
      await dispatch(getMovies(page, search));
    } catch {
      generatePageError(404);
    }
  };

  useEffect(() => {
    if (!isServer) {
      fetchMoviesCSR();
    }
  }, [page, search]);

  return (
    <HelmetWrapper
      title="Каталог"
      metaDescription="Каталог фильмов и их наличия в онлайн-кинотеатрах"
    >
      <MainLayout>
        <MoviesContainer />
      </MainLayout>
    </HelmetWrapper>
  );
};

CatalogPage.getInitialProps = async ({ reduxStore, query }) => {
  const { page, search } = query;
  const { dispatch } = reduxStore;

  try {
    if (constants.isServer) {
      const runetPromise = dispatch(getRating('ru_net'));
      const moviesPromise = dispatch(getMovies(page, search));

      await Promise.all([moviesPromise, runetPromise]);
    }

    return { query };
  } catch {
    return {
      error: {
        statusCode: 404,
      },
    };
  }
};

CatalogPage.propTypes = {
  query: PropTypes.object.isRequired,
  isServer: PropTypes.bool.isRequired,
};

export default CatalogPage;
