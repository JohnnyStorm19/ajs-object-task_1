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
  for (let i = 0; i < newArr.length; i += 1) {
    // eslint-disable-next-line no-unused-vars
    for (const prop in newObj) {
      if (newArr[i] in newObj) {
        const object = {
          key: newArr[i],
          value: newObj[newArr[i]],
        };
        sortedArr.push(object);
        delete newObj[newArr[i]];
        newArr.splice(newArr.indexOf(newArr[i]), 1);
      }
    }
  }
  const arrayObj = Object.entries(newObj).sort();
  // eslint-disable-next-line array-callback-return
  arrayObj.map((el) => {
    const temp = { key: el[0], value: el[1] };
    sortedArr.push(temp);
  });
  return sortedArr;
}
