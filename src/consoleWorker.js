import getTransformedString from './transformator.js';
import { fileWriter } from './fileWorker.js';

export const writeToConsole = (outputStr, callback) => {
  process.stdout.write(outputStr);
  if (callback) callback();
};

export const readFromConsole = async (output, shift, isEncode) => {
  process.stderr.write('You do not provide a path to the input file. Please write your message here:\n(If you want to exit press Ctrl + C)\n');
  process.stdin.setEncoding('utf8');
  process.stdin.resume();
  process.stdin.on('readable', async () => {
    const inputDataFromConsole = process.stdin.read();
    if (inputDataFromConsole === '\u0003') {
      process.exit();
    }
    if (inputDataFromConsole !== null) {
      if (!output) {
        const outputStr = getTransformedString(inputDataFromConsole, shift, isEncode);
        writeToConsole(outputStr, readFromConsole);
      } else {
        await fileWriter(inputDataFromConsole, output, shift, isEncode, readFromConsole);
      }
    }
  });

  process.stdin.on('end', () => {
    process.stdout.write('end');
  });
};
