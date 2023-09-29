export default function appendToEachArrayValue(array, appendString) {
  const arr = array;
  for (const idx of array) {
    const value = array[idx];
    arr[idx] += appendString + value;
  }

  return arr;
}
