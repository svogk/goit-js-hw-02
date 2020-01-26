const findLongestWord = function (string) {

    const words = string.split(' ');
    console.log(words);

    let longestWord = words[0];

    for (let i = 1; i < words.length; i += 1) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i];
        }
    }
    console.log(`Самое длинное слово в строке - ${longestWord}`);
    return longestWord;
}


/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'