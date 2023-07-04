const chai = require('chai');
const assert = chai.assert;

const { createDeck, countCards } = require('../src/deck')
const { createCard } = require('../src/card')

describe('deck', function() {
  const card1 = createCard(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
  const card2 = createCard(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
  const card3 = createCard(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
  
  it('should create deck', function() {
    const deck = createDeck([card1, card2, card3]);
    assert.deepEqual(deck, deck);
  });

  it('should count cards in deck', function() {
    const deck = createDeck([card1, card2, card3]);
    assert.deepEqual(deck.length, 3);
  }); 

}); 