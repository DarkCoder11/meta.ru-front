/* eslint-disable */
import moment from 'moment';

const sort = (prop, arr, isDate) => {
  prop = prop.split('.');
  const len = prop.length;

  arr.sort(function(a, b) {
    let i = 0;
    while (i < len) {
      a = a[prop[i]];
      b = b[prop[i]];
      i++;
    }

    const firstCondition = isDate ? moment(a) > moment(b) : a > b;
    const secondCondition = isDate ? moment(a) < moment(b) : a < b;

    if (firstCondition) {
      return -1;
    }
    if (secondCondition) {
      return 1;
    }
    return 0;
  });
  return arr;
};

const slice = (array, start, end) => {
  let length = array == null ? 0 : array.length;
  if (!length) {
    return [];
  }
  start = start == null ? 0 : start;
  end = end === undefined ? length : end;

  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : (end - start) >>> 0;
  start >>>= 0;

  let index = -1;
  const result = new Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
};

const isNumber = (x) => {
  return Object.prototype.toString.call(x) === '[object Number]';
};

const take = (array, n = 1) => {
  if (!(array != null && array.length)) {
    return [];
  }
  return slice(array, 0, n < 0 ? 0 : n);
};

export default { sort, take, isNumber };
