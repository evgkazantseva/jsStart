let a = Number(document.getElementById('first').value);
let b = Number(document.getElementById('second').value);

function calculate(operation) {
    
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
                c = `Ай-ай-ай, на ноль делить нельзя!`;
            } else {
                c = a / b;
            }
            break;
    }
	return c;
    }
	
	document.getElementById('result').value = c;