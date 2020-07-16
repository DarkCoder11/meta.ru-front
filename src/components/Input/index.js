import React from 'react';
import PropTypes from 'prop-types';

const Input = ({
  name,
  type,
  value,
  onChange,
  className,
  placeholder,
  inputRef,
  ...props
}) => (
  <input
    id={name}
    ref={inputRef}
    {...props}
    name={name}
    type={type}
    value={value}
    onChange={onChange}
    className={className}
    placeholder={placeholder}
  />
);

Input.defaultProps = {
  value: '',
  type: 'text',
  inputRef: undefined,
  name: undefined,
  className: undefined,
};

Input.propTypes = {
  value: PropTypes.any,
  inputRef: PropTypes.any,
  type: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
