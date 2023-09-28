export default class HolbertonClass {
  constructor(size, location) {
    this.size = size;
    this.location = location;
  }

  set size(value) {
    this._size = value;
  }

  get size() {
    return this._size;
  }

  set location(value) {
    this._location = value;
  }

  get location() {
    return this._location;
  }

  [Symbol.toPrimitive](entry) {
    if (entry === 'number') {
      return this.size;
    }
    if (entry === 'string') {
      return this.location;
    }
    return this;
  }
}
