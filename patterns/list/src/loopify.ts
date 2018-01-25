/**
 * Appends the first element onto the end of its input array
 * @param array
 * @example
 * // returns [1,2,3,1]
 * loopify([1,2,3])
 * @returns {Array}
 */
const loopify = (array: any[]): any[] => {
  // NOTE: function name was previously 'wrapped'
  return [...array, array[0]];
};

export default loopify;
