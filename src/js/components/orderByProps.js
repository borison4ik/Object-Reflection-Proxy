export default function orderByProps(object, arr = []) {
  const entryes = Object.entries(object);
  const sorted = entryes.sort();
  const inCasePart = [];
  const dontCasePart = [];

  for (const item of sorted) {
    if (!arr.includes(item[0])) {
      dontCasePart.push({
        key: item[0],
        value: item[1],
      });
    } else {
      const index = arr.indexOf(item[0]);
      inCasePart[index] = {
        key: item[0],
        value: item[1],
      };
    }
  }

  return [...inCasePart, ...dontCasePart];
}
