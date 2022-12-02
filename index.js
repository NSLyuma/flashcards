const fs = require('fs');
const chalk = require('chalk');

const fsread = fs.readFileSync(
  './topics/nighthawk_flashcard_data.txt',
  'utf-8'
);

const arr = fsread.split('\n');
console.log(chalk.blue(arr));
