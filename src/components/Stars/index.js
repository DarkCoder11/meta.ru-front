import React, { useState, useEffect } from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import useLocalStorage from 'utils/useLocalStorage';

import Star from '../../../public/img/star.svg';
import styles from './Stars.scss';

const Stars = ({
  slug,
  totalStars,
  starClasses,
  starActiveClasses,
  starsContainerClasses,
}) => {
  const [starsSelected, selectStar] = useState(0);
  const [localStorage, setLocalStorage] = useLocalStorage(
    'meta-movies-filmRatings',
    {},
  );

  useEffect(() => {
    selectStar(localStorage[slug]);
  });

  const writeToLocalStorage = (url, rating) =>
    setLocalStorage({ [url]: rating });

  const starClickHandler = (index) => {
    selectStar(index + 1);
    writeToLocalStorage(slug, index + 1);
  };

  const rendStars = () =>
    [...Array(totalStars)].map((_, index) => (
      <Star
        key={shortid.generate()}
        onClick={() => starClickHandler(index)}
        className={classNames(styles.containerItem, {
          [starClasses]: starClasses,
          [starActiveClasses]: index < starsSelected,
          [styles.containerItemActive]: index < starsSelected,
        })}
      />
    ));

  return (
    <div
      className={classNames(styles.container, {
        [starsContainerClasses]: starsContainerClasses,
      })}
    >
      {rendStars()}
    </div>
  );
};

Stars.defaultProps = {
  totalStars: 5,
  starClasses: '',
  starActiveClasses: '',
  starsContainerClasses: '',
};

Stars.propTypes = {
  totalStars: PropTypes.number,
  starClasses: PropTypes.string,
  slug: PropTypes.string.isRequired,
  starActiveClasses: PropTypes.string,
  starsContainerClasses: PropTypes.string,
};

export default Stars;
