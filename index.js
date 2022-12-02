const fs = require('fs');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

function getQuestion(string) {
  const content = fs.readFileSync(`./topics/${string}`,'utf-8');
  return content.split('\n')
}

function quiz() {
  console.log('Hello! Enter your name');
  const userName = readlineSync.question('--> ');
  console.clear();
  console.log(`\n${userName}, выбери тему \n`);
  const folder = fs.readdirSync('./topics');
  console.log(folder.map((file) => file.slice(0, -4)).join('\n'));
  let themeChoice = readlineSync.question('--> ');
  console.log(themeChoice)
  for (let i=0; i<folder.length; i+=1) {
    if(folder[i].slice(0,1) === themeChoice) {
      const currentQuestion = folder[i]
      console.log(getQuestion(currentQuestion))
    }
  }
}


quiz();

// сделать разноцветным
// сделать проверку что пользователь при выборе темы ввел число

