import minimist from 'minimist';

import { ALPHABETS } from './src/constants.js';
import { getArrayFromString } from './src/helpers.js';

// data
const ALPHABET_LENGTH = ALPHABETS.small.length;

// parse data from console
const rawArguments = process.argv.slice(2);
const parserOptions = {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  },
  string: ['a', 'action'],
  unknown: (arg) => {
    console.error('Unknown option: ', arg);
    console.log(`
CLI tool accept 4 options (short alias and full name):
    -s, --shift: a shift
    -i, --input: an input file
    -o, --output: an output file
    -a, --action: an action encode/decode.
Please use only accept options!
`);
    return false;
  },
};

const consoleArg = minimist(rawArguments, parserOptions);

const { shift, action } = consoleArg;
const isEncode = (action === 'encode');

console.log(consoleArg);

// test data
const inputString = 'This is secret. Message about "_" symbol!';
const outputString = 'Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!';

// begin
const getNewSymbolFromAlphabet = (alphabet, currentEl, isEncode) => {
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

const getOutputString = (isEncode = true) => {
  const finishArray = getArrayFromString(inputString).map((el) => {
    let secretEl = getNewSymbolFromAlphabet(ALPHABETS.small, el, isEncode);
    if (secretEl === -1) {
      secretEl = getNewSymbolFromAlphabet(ALPHABETS.big, el, isEncode);
      if (secretEl === -1) return el;
    }
    return secretEl;
  });

  return finishArray.join('');
};

console.log(getOutputString(isEncode));
