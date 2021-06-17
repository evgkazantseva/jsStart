
let comments = [];
document.addEventListener("DOMContentLoaded", function (event) {
    let login = localStorage.getItem('login');
    let avatar = localStorage.getItem('avatar');
    let restoredComments = localStorage.getItem('comments');
    if (login != null) {
        document.getElementById('login').value = login;
    };
    if (avatar != null) {
        document.getElementById('avatar').value = avatar;
    }
    if (restoredComments != null) {
        comments = restoredComments.split(',');
        for (let comment of comments)
            printMessage(login, avatar, comment);
    }
});

function send() {
    let message = getMessage();
    let login = getLogin();
    let avatar = getAvatar();

    if (checkNotEmpty(login, avatar, message)) {
        let newMessage = checkSpam(message);
        printMessage(avatar, login, newMessage);
        document.getElementById('message').value = '';
        comments.push(newMessage);
        setStorage(login, avatar, comments);
    }
}

function setStorage(login, avatar, comments) {
    if (localStorage.getItem('login') == null) {
        localStorage.setItem('login', login);
    };

    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', avatar);
    };
    localStorage.setItem('comments', comments);
}

function checkNotEmpty(login, avatar, message) {
    document.getElementById('messageError').innerText = "";
    document.getElementById('loginError').innerText = "";
    document.getElementById('fileError').innerText = "";
    if (message == "") {
        document.getElementById('messageError').innerText += 'Please Enter your text';
        return false;
    };
    if (login == "") {
        document.getElementById('loginError').innerText += 'Please Enter your login';
        return false;
    };
    if (avatar == "") {
        document.getElementById('fileError').innerText += 'Please Enter file link';
        return false;
    };
    return true;
}


function checkSpam(message) {
    newMessage = message.replace(/viagra|xxx/gi, "***");
    return newMessage;
}


function printMessage(avatar, login, message) {

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