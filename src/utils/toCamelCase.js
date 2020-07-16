const camelCase = (str) =>
  str.replace(/[-_]([a-z])/g, (m) => m[1].toUpperCase());

export default camelCase;
