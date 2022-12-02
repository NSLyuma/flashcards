const readlineSync = require('readline-sync');
const fs = require('fs');

function quiz() {
  console.log('Hello! Enter your name');
  const userName = readlineSync.question('-> ');
  console.log(`${userName}, выбери тему`);
  // fs.readdirSync();
}

quiz();
