console.log('Задание 2');

const calculateEngravingPrice = function (message, pricePerWord) {
  const words = message.split(' ');

  const wordsCount = words.length;

  const result = wordsCount * pricePerWord;

  console.log(`
  Строка состоит из ${wordsCount} слов.
  Стоимость гравировки одного слова ${pricePerWord}.
  Стоимость гравировки строки ${result}.
  `);

  return result;
};

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    10,
  ),
); // 80

console.log(
  calculateEngravingPrice(
    'Proin sociis natoque et magnis parturient montes mus',
    20,
  ),
); // 160

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
); // 240

console.log(
  calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
); // 120
