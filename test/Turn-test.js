const chai = require('chai');
const assert = chai.assert;

const { evaluateGuess, takeTurn, calculatePercentCorrect, endRound } = require('../src/turn');
const { createCard } = require('../src/card');
const { createDeck } = require('../src/deck');
const { createRound } = require('../src/round');

describe('turn', function() {
  const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = createCard(2, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = createCard(3, 'What is Travis\'s favorite stress reliever?', ['listening to music', 'watching Netflix', 'playing with bubble wrap'], 'playing with bubble wrap');

  it('should state if answer is correct', function() {
    let correctGuess = evaluateGuess('sea otter', card1.correctAnswer);
    let expectedResponse = 'Correct!'

    assert.equal(correctGuess, expectedResponse)
  });

  it('should state if answer is incorrect', function() {
    let incorrectGuess = evaluateGuess('not sea otter', card1.correctAnswer);
    let expectedResponse = 'Incorrect!'

    assert.equal(incorrectGuess, expectedResponse)
  });

  it('should provide feedback', function() {
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
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);
    const incorrectGuess = takeTurn('not sea otter', round);

    assert.deepEqual(round.incorrectGuesses, [1])
  });

  it('should calculate percent correct for a round', function() {
    const round1 = {
      turn: 4, 
      incorrectGuesses: [1, 14], 
    }
    let percentCorrect = calculatePercentCorrect(round1)
    assert.equal(percentCorrect, 50)
  })

  it('should add 1 to turns with each guess', function() {
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const turn1 = takeTurn('sea otter', round);
    assert.deepEqual(round.turn, 1)

    const turn2 = takeTurn('playing with bubble wrap', round);
    assert.deepEqual(round.turn, 2)

    const turn3 = takeTurn('playing with bubble wrap', round);
    assert.deepEqual(round.turn, 3)
  
  })

  it('should advance to next card with each guess', function() {
    const deck = createDeck([card1, card2, card3]);
    const round = createRound(deck);

    const turn1 = takeTurn('sea otter', round);
    assert.equal(card1.id, 1)

    const turn2 = takeTurn('gallbladder', round);
    assert.equal(card2.id, 2)

    const turn3 = takeTurn('playing with bubble wrap', round);
    assert.equal(card3.id, 3)

  })

  it('announce end of round', function() {
    const round2 = {
      turn: 4, 
      incorrectGuesses: [1, 14], 
    }
    const announceEnd = endRound(round2);
    assert.equal(announceEnd, '** Round over! ** You answered 50% of the questions correctly!')
  })

});
