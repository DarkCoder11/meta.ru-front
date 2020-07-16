import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import Image from '../NextImage';
import BlankLink from '../BlankLink';
import styles from './RatingCard.scss';

const RatingCard = ({ image, value, link, className }) => (
  <BlankLink
    url={link}
    className={classNames(styles.container, {
      [className]: className,
    })}
  >
    <Image src={image} />
    <p>{value}</p>
  </BlankLink>
);

RatingCard.defaultProps = {
  className: '',
};

RatingCard.propTypes = {
  className: PropTypes.string,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
};

export default RatingCard;
