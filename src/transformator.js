import { ALPHABETS } from './constants.js';
import { getArrayFromString } from './helpers.js';

// data
const ALPHABET_LENGTH = ALPHABETS.small.length;

const getNewSymbolFromAlphabet = (alphabet, currentEl, shift, isEncode) => {
  const alphaArray = getArrayFromString(alphabet);
  const index = alphaArray.indexOf(currentEl);
  if (index !== -1) {
    const replaceElIndex = isEncode
      ? (ALPHABET_LENGTH + index + shift) % ALPHABET_LENGTH
      : (ALPHABET_LENGTH - shift + index) % ALPHABET_LENGTH;

    return alphaArray[replaceElIndex];
  }
  return index;
};

const getTransformedString = (inputString, shift, isEncode) => {
  const finishArray = getArrayFromString(inputString).map((el) => {
    let secretEl = getNewSymbolFromAlphabet(ALPHABETS.small, el, shift, isEncode);
    if (secretEl === -1) {
      secretEl = getNewSymbolFromAlphabet(ALPHABETS.big, el, shift, isEncode);
      if (secretEl === -1) return el;
    }
    return secretEl;
  });

  return finishArray.join('');
};

export default getTransformedString;
