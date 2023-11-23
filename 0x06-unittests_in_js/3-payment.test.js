const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with correct arguments', () => {
    // Arrange
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

    // Act
    sendPaymentRequestToApi(100, 20);

    // Assert
    assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

    // Clean up
    calculateNumberSpy.restore();
  });
});
