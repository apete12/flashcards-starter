function evaluateGuess(guess, correctAnswer) {
    if(correctAnswer === guess){
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

function takeTurn(guess, round) {
    const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);

    if (feedback === 'Correct!') {
        round.turn += 1
    } else {
        round.incorrectGuesses.push(round.currentCard.id)
        round.turn += 1
    }
    // console.log('round.currentCard', round.currentCard)
    
    return feedback
}

function calculatePercentCorrect(round) {
    const percentCorrect = ((round.turn - round.incorrectGuesses.length)/round.turn) * 100
    // console.log(percentCorrect)
    return parseInt(percentCorrect)
}


module.exports = {
    evaluateGuess,
    takeTurn,
    calculatePercentCorrect
}