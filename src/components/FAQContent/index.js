import React from 'react';
import PropTypes from 'prop-types';

import styles from './FAQContent.scss';
import FAQContentItem from './FAQContentItem';

const FAQContent = ({ questions }) => {
  const renderQuestions = () =>
    questions.map((question) => (
      <FAQContentItem key={question.id} {...question} />
    ));

  return <div className={styles.container}>{renderQuestions()}</div>;
};

FAQContent.propTypes = {
  questions: PropTypes.array.isRequired,
};

export default FAQContent;
