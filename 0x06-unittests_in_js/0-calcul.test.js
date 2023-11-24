const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('whole numbers', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('second number floating point', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('both numbers floating point', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
