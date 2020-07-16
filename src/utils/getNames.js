const getNames = (array, prop, neededCount) => {
  let displayName = '';

  array.forEach((item, index) => {
    if (index < neededCount) {
      displayName += `${index !== 0 ? ',' : ''} ${item[prop]}`;
    }
  });

  return displayName;
};

export default getNames;
