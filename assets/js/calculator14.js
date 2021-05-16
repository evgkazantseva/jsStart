function calculate(operation) {
    let a = Number(document.getElementById('first').value);
    let b = Number(document.getElementById('second').value);
    switch (operation) {
        case '+':
            c = a + b;
            break;
        case '-':
            c = a - b;

            break;
        case '*':
            c = a * b;

            break;
        case '/':
            if (b == 0 && a == 0) {
                c = `Поздравляю, вы получили неопределенность!`;
            } else if (b == 0) {
                c = `Поздравляю, вы получили бесконечность!`;
            } else {
                c = a / b;
            }
            break;
    }
    document.getElementById('result').value = c;
}