const chai = require('chai');
const assert = chai.assert;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  it('should be an object', function() {
    assert.typeOf(card, 'object')
  });

  it('should create a card and its properties', function() {
    assert.equal(card.id, 1)
    assert.deepEqual(card.question, 'What allows you to define a set of related information using key-value pairs?')
    assert.deepEqual(card.answers, ['object', 'array', 'function'])
    assert.equal(card.correctAnswer, 'object')
  });  

});