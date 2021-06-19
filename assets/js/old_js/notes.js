document.addEventListener("DOMContentLoaded", function (event) {
    if (localStorage.length == 0) {
        document.getElementById('notesList').innerHTML = `У вас нет заметок`;
    } else {
        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i);
            regexp = /^note/;
            if (regexp.test(key)) {
                let note = localStorage.getItem(key);
                document.getElementById('notesList').innerHTML += `Заметка:${note}<br>
            <button id="removeAllButton" onClick="remove('${key}');">Удалить</button><br></div>`;
            }
        }
        if (document.getElementById('notesList').innerHTML != "") {
            document.getElementById('notesList').innerHTML += `<div><button id="removeAllButton" onClick="removeAll();">Удалить все</button>
        </div>`;
        } else {
            document.getElementById('notesList').innerHTML = `У вас нет заметок`;
        }
    };
});


function send() {
    let message = getMessage();
    let key = getKey();
    if (check()) {
        localStorage.setItem(key, message);
        window.location.reload();
    }
}

function check() {
    let message = getMessage();
    let key = getKey();
    let regexpKey = /[^A-Za-z]/;

    document.getElementById('messageError').innerHTML = "";
    if (message == "") {
        document.getElementById('messageError').innerHTML += 'Не введен текст заметки<br>';
        return false;
    };

    if (localStorage.getItem(key) != null) {
        document.getElementById('messageError').innerHTML += 'Заметка с таким ключом уже есть<br>';
        return false;
    };
    return true;
}

function getMessage() {
    return document.getElementById('message').value;
}

function getKey() {
    return 'note' + Date.now();
}

function removeAll() {
    localStorage.clear();
    window.location.reload();
}

function remove(key) {
    localStorage.removeItem(key);
    window.location.reload();
}