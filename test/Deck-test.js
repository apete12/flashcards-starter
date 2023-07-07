const chai = require('chai');
const assert = chai.assert;

const cardDeck = require('../src/data')

const { createDeck, countCards } = require('../src/deck')

describe('deck', function() {
  it('should create deck', function() {
    const deck = createDeck(cardDeck.prototypeData);
    assert.equal(deck, cardDeck.prototypeData)
  });

  it('should count cards in deck', function() {
    const deck = createDeck(cardDeck.prototypeData);
    assert.equal(countCards(deck), cardDeck.prototypeData.length)
  }); 

});