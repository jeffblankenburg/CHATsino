function HelpIntent(handlerInput) {
    const speakOutput = 'You said help.';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = HelpIntent;