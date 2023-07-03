
function createCard(id, question, answers, correctAnswer){
    return {
        id: id,
        question: question,
        answers: answers,
        correctAnswer: correctAnswer
    }

}

function evaluateGuess(guess, correctAnswer) {
    if(correctAnswer === guess){
        return 'Correct!'
    } else {
        return 'Incorrect!'
    }
}

module.exports = {
    createCard,
    evaluateGuess
}