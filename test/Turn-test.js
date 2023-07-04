const chai = require('chai');
const expect = chai.expect;

const { evaluateGuess } = require('../src/turn');
const { createCard } = require('../src/card');

describe('turn', function() {
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');

  it('should be a function', function() {
    expect(evaluateGuess).to.be.a('function');
  });

  it('should state if answer is correct', function() {
    let correctGuess = evaluateGuess('object', card.correctAnswer);
    let expectedResponse = 'Correct!'

    expect(correctGuess).to.equal(expectedResponse)

  });

  it('should state if answer is incorrect', function() {
    let incorrectGuess = evaluateGuess('not object', card.correctAnswer);
    let expectedResponse = 'Incorrect!'

    expect(incorrectGuess).to.equal(expectedResponse)

  });

});