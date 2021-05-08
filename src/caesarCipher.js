import getTransformedString from './transformator.js';
import { fileWorker, fileReader } from './fileWorker.js';
import { JS_DATA_TYPES } from './constants.js';
import { writeToConsole, readFromConsole } from './consoleWorker.js';
import getConsoleArguments from './consoleParser.js';

const caesarCipher = () => {
  const {
    shift,
    action,
    output,
    input,
  } = getConsoleArguments();
  const isEncode = (action === 'encode');

  if (typeof shift !== JS_DATA_TYPES.number || (shift ^ 0) !== shift) {
    process.stderr.write('The shift param is undefined. Please try again with all required params.');
    process.exit(-1);
  }

  if (action !== 'encode' && action !== 'decode') {
    process.stderr.write('Action param is undefined or not supported (support only encode/decode params). Please try again with all required params.');
    process.exit(-1);
  }

  if (shift && action && input && output) {
    process.stderr.write('All required params are coming.\n');
    fileWorker(input, output, shift, isEncode);
  }

  if (!input) {
    readFromConsole(output, shift, isEncode);
  } else if (typeof input !== JS_DATA_TYPES.string) {
    process.stderr.write('The input file is undefined. Please try again with all required params.');
    process.exit(-1);
  }

  if (input && !output) {
    fileReader(input, (inputStr) => {
      const outputStr = getTransformedString(inputStr, shift, isEncode);
      writeToConsole(outputStr);
    });
  }

  if (output && typeof output !== JS_DATA_TYPES.string) {
    process.stderr.write('The output file is undefined. Please try again with all required params.');
    process.exit(-1);
  }
};

export default caesarCipher;
