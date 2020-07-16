import React from 'react';
import PropTypes from 'prop-types';

import { Footer } from '../../components';
import { NavContainer } from '../../containers';

const MainLayout = ({ children }) => (
  <>
    <NavContainer />
    {children}
    <Footer />
  </>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
