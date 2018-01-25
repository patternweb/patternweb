/**
 * Returns an valid index even when its input value is out of bounds
 * @returns {Number}
 * @param arrayLength
 */
const safeIndex = arrayLength => index => {
  if (index < 0) {
    return (arrayLength + index % arrayLength) % arrayLength;
  } else if (index >= arrayLength) {
    return index % arrayLength;
  } else {
    return index;
  }
};

export default safeIndex;
