
function createArray() {
    let randomArray = [];
    for (let i = 0; i < 10; i++) {
        randomArray[i] = Math.round(Math.random() * 20) - 10;
    }
    return randomArray;
}

function sumArray(randomArray) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += randomArray[i];
    }
    return sum;
}

function sumArray(randomArray) {
    let sum = 0;
    for (let i = 0; i < 10; i++) {
        sum += randomArray[i];
    }
    return sum;
}

function medArray(randomArray) {
    let med = 0;
    for (let i = 0; i < 10; i++) {
        med += randomArray[i];
    }
    return med / 10;
}

function multArray(randomArray) {
    let mult = 1;
    for (let i = 0; i < 10; i++) {
        mult = randomArray[i] * mult;
    }
    return mult;
}


function randomPrint() {
    document.getElementById("result").innerHTML = "";
    let randomArray = createArray();
    document.getElementById("result").innerText += `
     Сгенерировали: ${randomArray},
     Минимальное: ${randomArray.sort((a, b) => { return a - b })[0]},
     Максимальное: ${randomArray.sort((a, b) => { return a - b })[9]},
     Среднее арифметическое: ${medArray(randomArray)},
     Сумма чисел: ${sumArray(randomArray)},
     Произведение чисел: ${multArray(randomArray)}  
    `;
}