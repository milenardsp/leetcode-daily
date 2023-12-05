/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {
    let totalValidStrings = 0;

    words.forEach(function(word) {
        let charactersThatBelong = 0;
        const wordLength = word.length;

        for (const letter of word) {
            const ocorrencesOfLetterOnWord = word.split(letter);
            const ocorrencersOfLetterOnChars = chars.split(letter);

            if (ocorrencesOfLetterOnWord.length <= ocorrencersOfLetterOnChars.length) {
                charactersThatBelong++;
            }
        }

        if (charactersThatBelong === wordLength) {
            totalValidStrings += wordLength;
        }
    })

    return totalValidStrings;
};
