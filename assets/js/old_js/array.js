function sumArray() {
  let arrayNumbers = [];
  let sum = 0;
  while (true) {
    let value = prompt("Введите число", "");
    if (value == "" || value == null || !Number(value)) break;
    sum += Number(value);
    arrayNumbers.push(value);
  }
  if (arrayNumbers.length != 0) {
    alert("Сумма: " + sum + "\n" +
      "Массив: " + arrayNumbers.sort(function (a, b) {
        return a - b
      }));
  } else {
    alert("Вы не ввели ни одного числового значения!");
  }
}