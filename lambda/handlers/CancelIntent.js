function CancelIntent(handlerInput) {
    const speakOutput = 'You said cancel.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
}

module.exports = CancelIntent;