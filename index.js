const fs = require('fs');

const contents = fs.readFileSync(`${__dirname}/README.md`, 'utf8');
const currentNumber = Number(contents);
const newNumber = currentNumber + 1;

fs.writeFileSync("README.md", String(newNumber));
