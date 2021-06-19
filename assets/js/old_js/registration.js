function check() {
    let username = document.getElementById("name");
    let login = document.getElementById("login");
    let password = document.getElementById("password");
    let repeatPassword = document.getElementById("repeatPassword");
    let agreeOferta = document.getElementById("oferta");
    let regexpPassword = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$/;
    let regexpLogin = /^[a-z0-9_-]{3,16}$/;

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
    } else if (!regexpLogin.test(login.value)) {
        document.getElementById("loginError").innerHTML += "Login is incorrect";
    }

    if (password.value == '') {
        document.getElementById("passwordError").innerHTML = "Please,enter your password";
    } else if (!regexpPassword.test(password.value)) {
        document.getElementById("passwordError").innerHTML += "Password is too simple";
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