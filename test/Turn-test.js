const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const { evaluateGuess, takeTurn, calculatePercentCorrect } = require('../src/turn');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound } = require('../src/round');

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

  it('should provide feedback', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const correctGuess = evaluateGuess('sea otter', card1.correctAnswer)
    const goodFeedback = takeTurn('sea otter', round);

    const incorrectGuess = evaluateGuess('not sea otter', card1.correctAnswer)
    const badFeedback = takeTurn('not sea otter', round);

    assert.deepEqual(correctGuess, goodFeedback);
    assert.deepEqual(incorrectGuess, badFeedback);
  })

  it('should add card id to list of incorrect guesses', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    const incorrectGuess = takeTurn('not sea otter', round);

    assert.deepEqual(round.incorrectGuesses, [1])
  });

  it('should calculate percent correct for a round', function() {
    const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    const card3 = createCard(12, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');
    
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const turn1 = takeTurn('sea otter', round);
    // console.log('turn1', round)
    const turn2 = takeTurn('gallbladder', round);
    // console.log('turn2', round)
    const turn3 = takeTurn('playing with bubble wrap', round);

    const percentCorrect = calculatePercentCorrect(round)
    assert.deepEqual(percentCorrect, 100)
  })


});