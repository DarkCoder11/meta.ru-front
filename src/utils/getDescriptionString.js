const getDescriptionString = (...rest) => {
  const tempArray = [...rest];

  const values = tempArray.filter((item) => !!item);
  const result = values.map(
    (item, i) => `${item}${i === values.length - 1 ? '' : ' • '}`,
  );
  return result;
};

export default getDescriptionString;
