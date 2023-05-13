export default function orderByProps(obj, arr) {
  if (!arr.length) {
    return obj;
  }
  if (Array.isArray(obj) || !Object.keys(obj).length) {
    throw new Error('Invalid object');
  }
  const newArr = [...arr];
  const newObj = { ...obj };
  const sortedArr = [];
  newArr.forEach((key) => {
    const value = newObj[key];
    if (!(key in newObj)) {
      throw new Error('Invalid key name');
    }
    sortedArr.push({ key, value });
    delete newObj[key];
  });
  const tempArr = Object.entries(newObj)
    .sort()
    .map((el) => ({ key: el[0], value: el[1] }));
  return sortedArr.concat(tempArr);
}
