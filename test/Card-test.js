const chai = require('chai');
const expect = chai.expect;

const { createCard, evaluateGuess } = require('../src/card');

describe('card', function() {
  it('should be a function', function() {
    expect(createCard).to.be.a('function');
  });

  it('should create a card and its properties', function() {
    const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', ['object', 'array', 'function'], 'object');
    
    expect(card.id).to.equal(1);
    expect(card.question).to.equal('What allows you to define a set of related information using key-value pairs?');
    expect(card.answers).to.deep.equal(['object', 'array', 'function']);
    expect(card.correctAnswer).to.equal('object');
  });  
});

describe('turn', function() {
  const card = createCard(1, 'What allows you to define a set of related information using key-value pairs?', 
  ['object', 'array', 'function'], 'object');

  it('should be a function', function(){
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

})