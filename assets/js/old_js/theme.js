function changeTheme() {

    switch (document.getElementById("themes").value) {
        case 'no':
            document.body.style.background = "none";
            break;
        case 'blue':
            document.body.style.background = "blue";
            break;
        case 'green':
            document.body.style.background = "green";
            break;
        case 'yellow':
            document.body.style.background = "yellow";
            break;
    }

}