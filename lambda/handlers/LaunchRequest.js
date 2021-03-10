function LaunchRequest(handlerInput) {
    const speakOutput = 'Welcome to the chatsino!';
    return handlerInput.responseBuilder
        .speak(speakOutput)
        .reprompt(speakOutput)
        .getResponse();
}

module.exports = LaunchRequest;