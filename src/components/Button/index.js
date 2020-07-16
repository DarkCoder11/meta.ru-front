import React from 'react';
import PropTypes from 'prop-types';
import { noop } from '../../utils';

const Button = ({ onClick, children, className, ...props }) => (
  <button type="button" className={className} onClick={onClick} {...props}>
    {children}
  </button>
);

Button.defaultProps = {
  children: [],
  onClick: noop,
  className: undefined,
};

Button.propTypes = {
  children: PropTypes.any,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
