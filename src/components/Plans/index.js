import React from 'react';
import PropTypes from 'prop-types';

import styles from './Plans.scss';
import PlansItem from './PlansItem';

const Plans = ({ plans }) => {
  const renderPlans = () =>
    plans.map((plan) => <PlansItem key={plan.payment_option} {...plan} />);

  return <div className={styles.container}>{renderPlans()}</div>;
};

Plans.propTypes = {
  plans: PropTypes.array.isRequired,
};

export default Plans;
