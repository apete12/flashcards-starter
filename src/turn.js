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
    return feedback
}

module.exports = {
    evaluateGuess,
    takeTurn
}