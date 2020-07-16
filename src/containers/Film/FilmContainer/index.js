import React from 'react';
import PropTypes from 'prop-types';

import styles from './FilmContainer.scss';
import FilmLeftContainer from '../FilmLeftContainer';
import { DoubleColumnLayout } from '../../../layouts';

const FilmContainer = ({ children }) => (
  <section className={styles.container}>
    <DoubleColumnLayout
      rightColumn={children}
      leftColumn={<FilmLeftContainer />}
      containerClasses={styles.containerContent}
      leftClasses={styles.containerContentLeft}
      rightClasses={styles.containerContentRight}
    />
  </section>
);

FilmContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default FilmContainer;
