const chai = require('chai');
const expect = chai.expect;
const cardDeck = require('../src/data')

const { createDeck, countCards } = require('../src/deck')

describe('deck', function() {
  it('should create deck and count cards', function() {

    const deck = createDeck(cardDeck.prototypeData)

    expect(countCards(deck)).to.equal(30);
  });

});