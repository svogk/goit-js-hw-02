let userInput;
const numbers = [];
let total = 0;

const add = function () {
    for (const number of numbers) {
        console.log(number);
        total += number;
    }
}

while (true) {
    let userInput = prompt('Введите число');
    console.log('first-userInput ', userInput);

    if (userInput === null) {
        console.log('Отменено пользователем!');
        break;
    };

    userInput = Number(userInput);

    const notANumber = Number.isNaN(userInput);

    if (notANumber) {
        console.log('Было введено не число, попробуйте еще раз');
        continue;
    } else {
        numbers.push(userInput);
        console.log(numbers);
    }
}

add(numbers);

console.log(`Общая сумма чисел равна ${total}`);
