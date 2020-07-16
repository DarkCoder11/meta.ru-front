import React from 'react';
import PropTypes from 'prop-types';
import configs from '../../../env.config';

const NextImage = ({ src, alt, className, isLocal, ...restProps }) => {
  const source = !isLocal ? `${configs.api}${src}` : src;

  return <img src={source} alt={alt} className={className} {...restProps} />;
};

NextImage.defaultProps = {
  isLocal: true,
  alt: 'nextimage',
  className: undefined,
};

NextImage.propTypes = {
  alt: PropTypes.string,
  isLocal: PropTypes.bool,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export default NextImage;
