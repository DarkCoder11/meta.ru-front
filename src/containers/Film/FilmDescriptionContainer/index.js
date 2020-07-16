import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { Button } from components';
import styles from './FilmDescriptionContainer.scss';
import { selectMovieInfo } from '../../../store/selectors/movieSelector';

const FilmDescriptionContainer = ({ info }) => (
  <>
    <div className={styles.short}>
      <p className={styles.shortTitle}>Краткое описание</p>
      <p className={styles.shortText}>{info.description}</p>
    </div>
    {/* <div className={styles.full}>
      <Button>Читать полное описание</Button>
    </div> */}
  </>
);

FilmDescriptionContainer.propTypes = {
  info: PropTypes.shape({
    description: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = createStructuredSelector({
  info: selectMovieInfo(),
});

export default connect(mapStateToProps)(FilmDescriptionContainer);
