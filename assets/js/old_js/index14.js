let showHi = ()  => {
    let name = document.getElementById('name').value;
    if (name == "" || name === null) {
        document.getElementById('entername').value = 'Привет, решившая остаться неизвестной';
    } else {
        document.getElementById('entername').value = `Привет, ${name}!`;
    }
    return;
}