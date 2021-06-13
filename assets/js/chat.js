document.addEventListener("DOMContentLoaded", function (event) {
    let login = localStorage.getItem('login');
    let avatar = localStorage.getItem('avatar');
    if (login != null) {
        document.getElementById('login').value = login;
    };
    if (avatar != null) {
        document.getElementById('avatar').value = avatar;
    }


});

function send() {
    let message = getMessage();
    let login = getLogin();
    let avatar = getAvatar();
    errorCount = 0;
    if ((localStorage.getItem('login') == null) && (login != "")) {
        localStorage.setItem('login', login);
    };

    if ((localStorage.getItem('avatar') == null) && (avatar != "")) {
        localStorage.setItem('avatar', avatar);
    };
    document.getElementById('messageError').innerText = "";
    document.getElementById('loginError').innerText = "";
    document.getElementById('fileError').innerText = "";
    if (message == "") {
        document.getElementById('messageError').innerText += 'Please Enter your text';
        errorCount += 1;
    };
    if (login == "") {
        document.getElementById('loginError').innerText += 'Please Enter your login';
        errorCount += 1;
    };
    if (avatar == "") {
        document.getElementById('fileError').innerText += 'Please Enter file link';
        errorCount += 1;
    };
    if (errorCount == 0) {
        let newMessage = checkSpam(message);
        printMessage(avatar, login, newMessage);
    }
}

function checkSpam(message) {
    newMessage = message.replace(/viagra|xxx/gi, "***");
    return newMessage;
}

function printMessage(avatar, login, message) {
    document.getElementById('message').value = '';
    document.getElementById('chat').innerHTML += `<div><img src="${avatar}" class="avatar"></img><div class='login'>${login}</div><div>${message}</div></div>`;

}

function getMessage() {
    return document.getElementById('message').value;
}

function getLogin() {
    return document.getElementById('login').value;
}

function getAvatar() {
    return document.getElementById('avatar').value;
}