function send() {
    let message = getMessage();
    document.getElementById('messageError').innerText = "";
    if (message == "" || message === null) {
        document.getElementById('messageError').innerText += 'Please Enter your text';
    } else {
        let newMessage = checkSpam(message);
        printMessage(newMessage);
    }
}

function checkSpam(message) {
    newMessage = message.replace(/viagra|xxx/gi, "***");
    return newMessage;
}

function printMessage(message) {
    document.getElementById('message').value = '';
    document.getElementById('chat').innerHTML += `<p>${message}</p>`;

}

function getMessage() {
    return document.getElementById('message').value;
}
