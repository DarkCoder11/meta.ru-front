import React from 'react';
import PropTypes from 'prop-types';

import styles from './Chips.scss';
import ChipsItem from './ChipsItem';

const Chips = ({ chips }) => {
  const renderChips = () =>
    chips.map((chip) => <ChipsItem key={chip.id} {...chip} />);

  return <div className={styles.content}>{renderChips()}</div>;
};

Chips.propTypes = {
  chips: PropTypes.array.isRequired,
};

export default Chips;
