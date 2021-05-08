import getTransformedString from './src/transformator.js';
import { fileWorker, fileReader } from './src/fileWorker.js';
import { JS_DATA_TYPES } from './src/constants.js';
import { writeToConsole, readFromConsole } from './src/consoleWorker.js';
import getConsoleArguments from './src/consoleParser';

const {
  shift,
  action,
  output,
  input,
} = getConsoleArguments();
const isEncode = (action === 'encode');

if (typeof shift !== JS_DATA_TYPES.number) {
  process.stderr.write('Shift param is undefined. Please try again with all required params.');
  process.exit(-1);
}

if (action !== 'encode' && action !== 'decode') {
  process.stderr.write('Action param is undefined or not accept (we accept only encode/decode params). Please try again with all required params.');
  process.exit(-1);
}

if (shift && action && input && output) {
  process.stderr.write('all params is coming \n');
  fileWorker(input, output, shift, isEncode);
}

if (!input) {
  readFromConsole(output, shift, isEncode);
} else if (typeof input !== JS_DATA_TYPES.string) {
  process.stderr.write('Input file is undefined. Please try again with all required params.');
  process.exit(-1);
}

if (input && !output) {
  fileReader(input, (inputStr) => {
    const outputStr = getTransformedString(inputStr, shift, isEncode);
    writeToConsole(outputStr);
  });
}

if (output && typeof output !== JS_DATA_TYPES.string) {
  process.stderr.write('Output file is undefined. Please try again with all required params.');
  process.exit(-1);
}
