import { ALPHABETS } from './src/constants.js';

// helpers
const getArrayFromString = (str) => str.split('');

// data
const ALPHABET_LENGTH = ALPHABETS.small.length;

// test data
const inputString = `This is secret. Message about "_" symbol!`;
const outputString= 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';
const isEncode = true;
const shift = 7;

// begin
const getNewSymbolFromAlphabet = (alphabet, currentEl, isEncode) => {
    const alphaArray = getArrayFromString(alphabet);
    const index = alphaArray.indexOf(currentEl);
    if (index !== -1) {
        const replaceElIndex = isEncode ? (ALPHABET_LENGTH+index+shift) % ALPHABET_LENGTH : (ALPHABET_LENGTH-shift+index) % ALPHABET_LENGTH;
        
        return alphaArray[replaceElIndex];
    }
    return index;
}

const getOutputString = (isEncode = true) => {
    const finishArray = getArrayFromString(inputString).map((el) => {
        let secretEl = getNewSymbolFromAlphabet(ALPHABETS.small, el, isEncode);
        if (secretEl == -1) {
            secretEl = getNewSymbolFromAlphabet(ALPHABETS.big, el, isEncode);
            if (secretEl == -1) return el;
        }
        return secretEl;
    });

    return finishArray.join('');
}


console.log(getOutputString(isEncode));
