export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const arr = new DataView(new ArrayBuffer(length), 0, length);
  arr.setUint8(position, value);
  return arr;
}
