// YOUR CODE BELOW

function mostVowels(words) {
    const vowels = 'aeiouAEIOU';
    const wordArray = words.split(' ');
    const wordArrayLen = wordArray.length;
    let mostVowels = null;
    let highestVowelCount = 0;
    
    for (let i = 0; i < wordArrayLen; i += 1) {
        let word = cleanWord(wordArray[i]);
        let counter = 0;
        for (let j = 0; j < word.length; j += 1) {
            if (vowels.indexOf(word[j]) !== -1) {
                counter += 1;
            }
        }
        if (counter > highestVowelCount) {
            highestVowelCount = counter;
            mostVowels = word;
        }
    }
    if (highestVowelCount) return mostVowels;
    else return '';

    function cleanWord(word) {
        const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let newWord = '';
        for (let i = 0; i < word.length; i += 1) {
            if (alphabet.indexOf(word[i]) !== -1) {
                newWord += word[i];
            }
        }
        return newWord;
    }
}