const isStringEmpty = (text) =>
  typeof text === 'string' ? !text || text === '' || text.trim() === '' : false;

const isValidLength = (str, length) => str.length >= length;

const isEmail = (email) => {
  /* eslint-disable-next-line */
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

export { isStringEmpty, isEmail, isValidLength };
