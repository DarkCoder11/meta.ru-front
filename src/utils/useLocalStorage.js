import { useState } from 'react';

import isSSR from './isSSR';

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      if (!isSSR) {
        const item = window.localStorage.getItem(key);
        // Parse stored json or if none return initialValue
        return item ? JSON.parse(item) : { [key]: 0 };
      }
      return initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = Object.assign(storedValue, value);
      // Save state
      setStoredValue(Object.assign(storedValue, valueToStore));
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      return {};
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
