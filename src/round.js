function createRound(deck) {
    const round = {
        deck: deck,
        turn: 0,
        incorrectGuesses:[],
        currentCardIndex: 0,

        getCurrentCard(){
            return this.deck[this.currentCardIndex]

        },

        advanceCard(){
            this.currentCardIndex +=1
        }
    }
    return round
}


module.exports = {
    createRound
}