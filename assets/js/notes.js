
function send() {
    let message = getMessage();
    let key = getKey();
    let regexpKey = /[^A-Za-z0-9]/;
    document.getElementById('messageError').innerHTML = "";
    let errorCount = 0;
    if (message == "" || key == "") {
        document.getElementById('messageError').innerHTML += 'Не введен ключ или текст заметки<br>';
        errorCount += 1;
    };
    if (regexpKey.test(key)) {
        document.getElementById('messageError').innerHTML += 'Ключ заметки введен неверно<br>';
        errorCount += 1;
    };
    if (localStorage.getItem(key) != null) {
        document.getElementById('messageError').innerHTML += 'Заметка с таким ключом уже есть<br>';
        errorCount += 1;
    };
    if (errorCount == 0) {
        localStorage.setItem(key, message);
    }
}

function getMessage() {
    return document.getElementById('message').value;
}

function getKey() {
    return document.getElementById('key').value;
}

