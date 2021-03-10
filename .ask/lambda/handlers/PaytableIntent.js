function PaytableIntent(handlerInput) {
    const speakOutput = 'This is the paytable intent.';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = PaytableIntent;