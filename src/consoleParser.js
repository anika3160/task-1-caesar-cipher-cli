import minimist from 'minimist';

import { isInteger } from './validators.js';

const parserOptions = {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  },
  unknown: () => false,
};

const getParamValue = (inputArray = [], paramName = '--someParam', paramAlias) => {
  let indexOfElement = inputArray.indexOf(paramName);

  if (indexOfElement === -1 && paramAlias) {
    indexOfElement = inputArray.indexOf(paramAlias);
  }

  if (indexOfElement !== -1) {
    return inputArray[indexOfElement + 1];
  }

  return undefined;
};

const getConsoleArguments = () => {
  const rawArguments = process.argv.slice(2);
  const consoleArguments = minimist(rawArguments, parserOptions);
  if (isInteger(consoleArguments.shift)) {
    return consoleArguments;
  }
  return { ...consoleArguments, shift: Number(getParamValue(rawArguments, '--shift', '-s')) };
};

export default getConsoleArguments;
