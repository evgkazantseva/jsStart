function getCheckedElements() {
    let checkedElements = document.querySelectorAll(':checked');
    return checkedElements;
}

function printSum(sum) {
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").innerHTML += 'Стоимость машины: ' + sum + ' y.e.';
}

function sumCost() {
    sum = 0;
    let sumElements = getCheckedElements();
    for (let element of sumElements) {
        sum += Number(element.value);
    }
    printSum(sum);
}