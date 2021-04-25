function calculate(operation){
    let a = Number(prompt('Введите 1 число')); 
    let b = Number(prompt('Введите 2 число'));
    switch (operation){
    case '+':
        c=a+b;
        alert(`Сумма двух чисел ${c}`);
        break;        
    case '-':
        c=a-b;
        alert(`Разность двух чисел ${c}`);
        break;
    case '*':
            c=a*b;
            alert(`Произведение двух чисел ${c}`);
            break;
    case '/':
            c=a/b;
            if (b == 0 && a==0)
             {alert(`Поздравляю, вы получили неопределенность: ${c}!`);}                 
                else if (b==0)
                {alert(`Поздравляю, вы получили бесконечность: ${c}!`);} 
            else 
            {alert(`Частное двух чисел ${c}`);}
            break;
            }
        }


