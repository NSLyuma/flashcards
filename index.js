const fs = require('fs');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

function quiz() {
  console.log('Hello! Enter your name');
  const userName = readlineSync.question('--> ');
  console.clear();
  console.log(`\n${userName}, выбери тему \n`);
  const folder = fs.readdirSync('./topics');
  console.log(folder.map((file) => file.slice(0, -4)).join('\n'));
}

quiz();

// сделать разноцветным