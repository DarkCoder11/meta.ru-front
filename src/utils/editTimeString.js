/* eslint-disable */
const editTimeString = (string = '') => {
  if (string === '' || typeof string !== 'string') {
    return '';
  }
  const array = string.split(':');
  if (isNaN(array[0])) {
    return '';
  }
  const hours = parseInt(array[0]);
  const minutes = parseInt(array[1]);
  return `${hours * 60 + minutes} мин`;
};

export default editTimeString;
