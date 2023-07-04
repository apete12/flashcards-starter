const chai = require('chai');
const expect = chai.expect;
const cardDeck = require('../src/data')

const { createDeck, countCards } = require('../src/deck')

describe('deck', function() {
  it('should create deck', function() {
    const deck = createDeck(cardDeck.prototypeData);

    expect(deck).to.equal(cardDeck.prototypeData);
  });

  it('should count cards in deck', function() {
    const deck = createDeck(cardDeck.prototypeData);

    expect(countCards(deck)).to.equal(cardDeck.prototypeData.length)
  }); 

});