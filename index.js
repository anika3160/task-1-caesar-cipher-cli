import minimist from 'minimist';

import getTransformedString from './src/transformator.js';

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

console.log(getTransformedString(inputString, shift, isEncode));
