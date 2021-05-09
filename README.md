# Task1: Caesar cipher CLI tool

## Description
Caesar cipher CLI tool is a console application for defining/decrypting the Caesar cipher by key. The application can read source text from a file and write result to a file. Input from the console is also available. The work is carried out only with the letters of the Latin alphabet, case sensitive. Good work!

## How setup?
1. Run terminal
2. Clone this repository. You can do it using the command:
```bash
git clone https://github.com/anika3160/task-1-caesar-cipher-cli.git
```
3. Go to the application folder
4. Write to the console for installing all dependencies. You can do it using the command:
```bash
npm i
```
or
```bash
npm install
```
5. Already done! 

## How use?
CLI tool accept 4 options (short alias and full name):
-   -s, --shift: a shift (integer number);
-   -i, --input: an input file (path to the input file);
-   -o, --output: an output file (path or name for the output file);
-   -a, --action: an action encode/decode (name of action).
**Please use only accept options!**

**Usage example**

```bash
node index -a encode -s 7 -i "./public/input.txt" -o "./output.txt"
```

> input.txt
> `This is secret. Message about "_" symbol!`

> output.txt
> `Aopz pz zljyla. Tlzzhnl hivba "_" zftivs!`
