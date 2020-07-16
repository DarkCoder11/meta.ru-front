import React from 'react';
import { connect } from 'react-redux';

import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';

import { setBestShowType } from 'store/actions/movieAction';
import { selectBestShowType } from 'store/selectors/movieSelector';

import styles from './BestShowTypes.scss';

const BestShowTypes = () => <div className={styles.container} />;

BestShowTypes.defaultProps = {
  activeClasses: '',
  itemClasses: '',
};

BestShowTypes.propTypes = {
  itemClasses: PropTypes.string,
  activeClasses: PropTypes.string,
  bestShowType: PropTypes.string.isRequired,
  setBestShowTypeHandler: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  bestShowType: selectBestShowType(),
});

const mapDispatchToProps = {
  setBestShowTypeHandler: setBestShowType,
};

export default connect(mapStateToProps, mapDispatchToProps)(BestShowTypes);
