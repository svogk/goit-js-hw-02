console.log('Задание 5');

const checkForSpam = function (message) {
  const normalizedMessage = message.toLowerCase();
  console.log(normalizedMessage);

  const isItSpam =
    normalizedMessage.includes('spam') || normalizedMessage.includes('sale');

  return isItSpam ? true : false;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
