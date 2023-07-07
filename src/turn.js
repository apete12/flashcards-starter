function evaluateGuess(guess, correctAnswer) {
    if(correctAnswer === guess){
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

function takeTurn(guess, round) {
    const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);

    if (feedback === 'Incorrect!') {
        round.incorrectGuesses.push(round.currentCard.id)
    }
    round.turn += 1
    round.currentCard = round.deck[round.turn]
    return feedback
}

function calculatePercentCorrect(round) {
    const percentCorrect = ((round.turn - round.incorrectGuesses.length)/round.turn) * 100
    return percentCorrect
}

function endRound(round) {
    let announceEnd = `** Round over! ** You answered ${parseInt(calculatePercentCorrect(round))}% of the questions correctly!`
    console.log(announceEnd)
    return announceEnd
}

module.exports = {
    evaluateGuess,
    takeTurn,
    calculatePercentCorrect,
    endRound
}