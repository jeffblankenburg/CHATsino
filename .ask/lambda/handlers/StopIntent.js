function StopIntent(handlerInput) {
    const speakOutput = 'You said stop.';
        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
}

module.exports = StopIntent;