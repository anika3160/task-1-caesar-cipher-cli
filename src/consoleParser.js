import minimist from 'minimist';

const rawArguments = process.argv.slice(2);
const parserOptions = {
  alias: {
    s: 'shift',
    i: 'input',
    o: 'output',
    a: 'action',
  },
  unknown: (arg) => {
    process.stderr.write(`Unknown option: ${arg}`);
    process.stderr.write(`
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

const getConsoleArguments = () => minimist(rawArguments, parserOptions);

export default getConsoleArguments;
