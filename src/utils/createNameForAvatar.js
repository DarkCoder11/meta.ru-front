const createNameForAvatar = (data) => {
  const arr = data.split(' ');
  if (arr.length === 1) {
    return data.slice(0, 2).toUpperCase();
  }
  return arr[0][0] + arr[1][0];
};

export default createNameForAvatar;
