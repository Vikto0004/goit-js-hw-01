// Написати функцію, котра отримує число і ступінь до якого
// треба піднести це число. Вивесит в консоль рядок:
// "Результат обчислення number"

function sum(number, exponent) {
  return `Результат обчислення: ${Math.pow(number, exponent)}`;
}

console.log(sum(3, 3));
