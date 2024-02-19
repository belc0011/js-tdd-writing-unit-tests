export function pointsForWord(word) {
    let sumTotal = 0;

    const wordArray = word.split('');
    console.log(wordArray)
    wordArray.forEach((letter) => {
        if (letter.toLowerCase() !== "a" && letter.toLowerCase() !== "e" && letter.toLowerCase() !== "i" && letter.toLowerCase() !== "o" && letter.toLowerCase() !== "u") {
            sumTotal += 2
        }
        else sumTotal += 1;
    })
    return sumTotal;
}


