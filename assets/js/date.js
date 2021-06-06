function generateDate() {
    document.getElementById("result").innerHTML = "";
    let date = getDatefrom();
    if (isNaN(date) || (Date.now() - date) < 0) {
        document.getElementById("result").innerHTML = `Please,enter right date format: 2021-06-06T15:51:50`;
    } else if ((Date.now() - date) / 1000 < 1) {
        document.getElementById("result").innerHTML = `Прямо сейчас`;
    } else if ((Date.now() - date) / 1000 < 60) {
        document.getElementById("result").innerHTML = `${Math.round((Date.now() - date) / 1000)} сек назад`;
    } else if ((Date.now() - date) / 1000 < 3600) {
        document.getElementById("result").innerHTML = `${Math.round((Date.now() - date) / (60 * 1000))} минут назад`;
    } else {
        date = new Date(date);
        document.getElementById("result").innerHTML = `${date.getFullYear()}.${date.getMonth() + 1}.${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
    }
}

function getDatefrom() {
    return Date.parse(document.getElementById('date').value);
}