function evaluateGuess(guess, correctAnswer) {
    if(correctAnswer === guess){
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

function takeTurn(guess, round) {
    const currentCard = round.getCurrentCard()
    const feedback = evaluateGuess(guess, currentCard.correctAnswer);
    
    if (feedback === 'Incorrect!') {
        round.incorrectGuesses.push(currentCard.id)
    }

    round.turn += 1
    round.advanceCard()
    return feedback
}

function calculatePercentCorrect(round) {
    const percentCorrect = ((round.turn - round.incorrectGuesses.length)/round.turn) * 100
    return parseInt(percentCorrect)
}

// function endRound(round){
    // const percentCorrect = calculatePercentCorrect(round);
    // 
    // if(round.turn === 30){
        // return `** Round over! ** You answered ${percentCorrect}% of the questions correctly!`
    // }
// }

module.exports = {
    evaluateGuess,
    takeTurn,
    calculatePercentCorrect,
    // endRound
}