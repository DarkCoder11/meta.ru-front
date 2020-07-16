import { useState } from 'react';
import { isStringEmpty, isEmail } from './validations';

const useForm = () => {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    let isValid = false;
    const { value, name } = event.target;

    switch (name) {
      case 'email':
        isValid = !isStringEmpty(value) && isEmail(value);
        break;
      case 'name':
      case 'plusText':
      case 'minusText':
      case 'reviewsText':
        isValid = !isStringEmpty(value);
        break;

      default:
        isValid = false;
        break;
    }

    setValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        isValid,
        value,
      },
    }));
  };

  const handleBlur = (event) => {
    const { name } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        isFocus: false,
      },
    }));
  };

  const handleFocus = (event) => {
    const { name } = event.target;

    setValues((prevValues) => ({
      ...prevValues,
      [name]: {
        ...prevValues[name],
        isFocus: true,
      },
    }));
  };

  return {
    handleChange,
    handleBlur,
    handleFocus,
    values,
    setValues,
  };
};

export default useForm;
