function StartGameIntent(handlerInput) {
    const speakOutput = 'This is the start game intent.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
}

module.exports = StartGameIntent;