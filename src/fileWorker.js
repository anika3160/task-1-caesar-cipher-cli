import fs from 'fs';
import { promisify } from 'util';

import getTransformedString from './transformator.js';

export const fileReader = async (input, callback) => {
  const appendFilePromised = promisify(fs.readFile);
  try {
    const inputString = await appendFilePromised(input, 'utf8');
    if (callback) await callback(inputString);
  } catch {
    process.stderr.write('The input file is undefined or unreadable. Please try again with all required params.');
    process.exit(-1);
  }
};

export const fileWriter = async (inputStr, output, shift, isEncode, callback) => {
  const appendFilePromised = promisify(fs.appendFile);
  try {
    await appendFilePromised(output, getTransformedString(inputStr, shift, isEncode));
    process.stdout.write('Output file:\n');
    process.stdout.write(fs.readFileSync(output, 'utf8'));
    if (callback) await callback();
  } catch (e) {
    process.stderr.write('The output file is undefined or unreadable. Please try again with all required params.');
    process.exit(-1);
  }
};

export const fileWorker = (input, output, shift, isEncode) => {
  fileReader(input, (inputStr) => fileWriter(`${inputStr}\n`, output, shift, isEncode));
};
