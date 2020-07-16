import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from '../../components';
import { FilmContainer, FilmHeaderContainer } from '../../containers';

const FilmLayout = ({ children }) => (
  <>
    <FilmHeaderContainer />
    <FilmContainer>{children}</FilmContainer>
    <Footer />
  </>
);

FilmLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmLayout;
