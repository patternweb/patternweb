/**
 * Moves X first elements to end of array
 * @param count
 * @param array
 * @returns {Array}
 */
const moveToEnd = (count:number, array: any[]): any[] => {
  const end = array.slice(0, count % array.length);
  const start = array.slice(-(array.length-end.length));
  return start.concat(end);
};

export default moveToEnd;
