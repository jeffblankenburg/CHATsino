function BalanceIntent(handlerInput) {
    const speakOutput = 'This is the balance intent.';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = BalanceIntent;