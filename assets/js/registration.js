function check() {
    let username = document.getElementById("name");
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");
    let agreeOferta = document.getElementById("oferta");

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("loginError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = '';
    document.getElementById("repeatPasswordError").innerHTML = "";
    document.getElementById("errorMessage").innerHTML = "";


    if (username.value == '') {
        document.getElementById("nameError").innerHTML = "Please,enter your name";
    }

    if (login.value == '') {
        document.getElementById("loginError").innerHTML = "Please,enter your login";
    }

    if (password.value == '') {
        document.getElementById("passwordError").innerHTML = "Please,enter your password";
    } else if (password.value.length < 8) {
        document.getElementById("passwordError").innerHTML += "Password must be at least 8 characters";
    }

    if (repeatPassword.value == '') {
        document.getElementById("repeatPasswordError").innerHTML = "Please,repeate yout password";
    }

    if (password.value != repeatPassword.value) {
        document.getElementById("errorMessage").innerHTML += "Passwords do not match</br>";
    }

    if (!agreeOferta.checked) {
        document.getElementById("errorMessage").innerHTML += "Please, confirm your agreement with Terms and Conditions";
    }

}