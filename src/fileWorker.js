import fs from 'fs';

import getTransformedString from './transformator.js';
import { JS_DATA_TYPES } from './constants.js';

export const fileReader = (input, callback) => {
  fs.readFile(input, 'utf8', (error, inputString) => {
    if (error) {
      process.stderr.write('Input file is undefined or unreadable. Please try again with all required params.');
      process.exit(-1);
    } else if (typeof inputString === JS_DATA_TYPES.string) {
      callback(inputString);
    }
  });
};

export const fileWriter = (inputStr, output, shift, isEncode) => {
  fs.appendFile(output, getTransformedString(`${inputStr}\n`, shift, isEncode), (err) => {
    if (err) {
      process.stderr.write('Output file is undefined or unreadable. Please try again with all required params.');
      process.exit(-1);
    } else {
      process.stdout.write('Output file:');
      process.stdout.write(fs.readFileSync(output, 'utf8'));
    }
  });
};

export const fileWorker = (input, output, shift, isEncode) => {
  fileReader(input, (inputStr) => fileWriter(inputStr, output, shift, isEncode));
};
