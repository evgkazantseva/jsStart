function parseFIO() {
    let FIO = getFIO();
    document.getElementById('nameError').innerText = "";
    if (FIO == "" || FIO === null) {
        document.getElementById('nameError').innerText += 'Будет круто, если вы представитесь!';
    } else {
        let names = FIO.trim().split(' ');
        let newNames = [];
        for (let i = 0; i < names.length; i++) {
            if (names[i] != "") {
                newNames.push(check(names[i]));
            }
        }
        if (newNames.length < 3) {
            document.getElementById('nameError').innerText += 'Кажется, вы забыли Фамилию, Имя или Отчество!';
        } else {
            printFIO(newNames[0], newNames[1], newNames[2]);
        }
    }
}

function printFIO(sirname, name, middlename) {
    document.getElementById('sirname').value = sirname;
    document.getElementById('name').value = name;
    document.getElementById('middlename').value = middlename;
}

function getFIO() {
    return document.getElementById('FIO').value;
}

function check(str) {
    return str == "" ? "" : str[0].toUpperCase() + str.toLowerCase().slice(1);
}

//альтернативный вариант решения без использования массивов
function parseFIO2() {
    let FIO = getFIO().trim();
    document.getElementById('nameError').innerText = "";
    if (FIO == "" || FIO === null) {
        document.getElementById('nameError').innerText += 'Будет круто, если вы представитесь!';
    } else {
        let sirname = check(FIO.slice(0, FIO.indexOf(' ')).trim());
        let middlename = check(FIO.slice(FIO.lastIndexOf(' '), FIO.length).trim());
        let name = check(FIO.slice(FIO.indexOf(' '), FIO.lastIndexOf(' ')).trim());
        if (name == "" || sirname == "" || middlename == "") {
            document.getElementById('nameError').innerText += 'Кажется, вы забыли Фамилию, Имя или Отчество!';
        } else {
            printFIO(sirname, name, middlename);
        }
    }
}

