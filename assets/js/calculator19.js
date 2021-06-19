class Calculator {
    static addition(number1, number2) {
        return number1 + number2;

    };
    static subtraction(number1, number2) {
        return number1 - number2;
    }

    static multiplication(number1, number2) {
        return number1 * number2;
    };

    static division(number1, number2) {

        if (number1 == 0 && number2 == 0) {
            return `Поздравляю, вы получили неопределенность!`;
        } else if (number2 == 0) {
            return `Ай-ай-ай, на ноль делить нельзя!`;
        } else {
            return number1 / number2;
        }
    }
}
function calculate(operation) {
    let number1 = Number(document.getElementById('first').value);
    let number2 = Number(document.getElementById('second').value);


    switch (operation) {
        case '+':

            result = Calculator.addition(number1, number2);
            printResult(result);
            break;
        case '-':
            result = Calculator.subtraction(number1, number2);
            printResult(result);
            break;
        case '*':
            result = Calculator.multiplication(number1, number2);
            printResult(result);
            break;
        case '/':
            result = Calculator.division(number1, number2);
            printResult(result);
            break;
    }
}

function printResult(result) {
    document.getElementById('result').value = result;
}

function empty() {
    document.getElementById('first').value = "";
    document.getElementById('second').value = "";
    document.getElementById('result').value = "";
}

