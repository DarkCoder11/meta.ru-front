import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import styles from './DoubleColumnLayout.scss';

const DoubleColumnLayout = ({
  containerClasses,
  leftClasses,
  rightClasses,
  leftColumn,
  rightColumn,
}) => (
  <div
    className={classNames('container', {
      [containerClasses]: containerClasses,
    })}
  >
    <div className={styles.content}>
      <div className={`left__container ${leftClasses}`}>{leftColumn}</div>
      <div className={`main__container ${rightClasses}`}>{rightColumn}</div>
    </div>
  </div>
);

DoubleColumnLayout.defaultProps = {
  containerClasses: '',
  leftClasses: '',
  rightClasses: '',
};

DoubleColumnLayout.propTypes = {
  leftClasses: PropTypes.any,
  rightClasses: PropTypes.string,
  containerClasses: PropTypes.any,
  leftColumn: PropTypes.any.isRequired,
  rightColumn: PropTypes.any.isRequired,
};

export default DoubleColumnLayout;
