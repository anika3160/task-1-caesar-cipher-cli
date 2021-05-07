import fs from 'fs';

import getTransformedString from './transformator.js';

const fileWorker = async (input, output, shift, isEncode) => {
  fs.readFile(input, 'utf8', (error, inputString) => {
    if (error) {
      console.log(error);
    } else if (typeof inputString === 'string' && inputString.length > 0) {
      fs.appendFile(output, getTransformedString(`${inputString}\n`, shift, isEncode), (err) => {
        if (err) {
          console.log(error);
        } else {
          console.log('Запись файла завершена. Содержимое файла:');
          console.log(fs.readFileSync(output, 'utf8'));
        }
      });
    }
  });
};

export default fileWorker;
