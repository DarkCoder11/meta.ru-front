const getLocalSpacedNumber = (number) =>
  number.toLocaleString().replace(/,/g, ' ');

export default getLocalSpacedNumber;
