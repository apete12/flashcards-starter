function createRound(deck) {
    const round = {
        deck: deck,
        turn: 0,
        incorrectGuesses:[],
        currentCard: deck[0],
    }
    return round
}


module.exports = {
    createRound
}