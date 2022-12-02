const fs = require('fs');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

function getQuestion(string) {
  const content = fs.readFileSync(`./topic-2/${string}`, 'utf-8');
  return content.split('\n').map((row) => row.split('|'));
}

function quiz() {
  setTimeout(() => {
    console.log(chalk.rgb(114, 16, 234).bold('Привет! 🖐'));
  }, 0);
  setTimeout(() => {
    console.log(
      chalk.rgb(43, 237, 234).bold('Меня зовут Эд, давай поиграем? (づ ◕‿◕ )づ')
    );
  }, 1000);
  setTimeout(() => {
    console.log(chalk.rgb(43, 104, 237).bold('Для начала введи своё имя'));
  }, 2000);

  //   console.log(
  //     chalk.rgb(114, 16, 234).bold('Привет! 🖐\n') +
  //       chalk
  //         .rgb(43, 237, 234)
  //         .bold('Меня зовут Эд, давай поиграем? (づ ◕‿◕ )づ\n') +
  //       chalk.rgb(43, 104, 237).bold('Для начала введи своё имя')
  //   );

  setTimeout(() => {
    const userName = readlineSync.question('--> ');
    console.clear();
    console.log(
      chalk.rgb(8, 239, 243).italic(`\n${userName}, `) +
        chalk.rgb(8, 239, 243).reset(`выбери тему\n`)
    );
    const folder = fs.readdirSync('./topic-2');
    console.log(folder.map((file) => file.slice(0, -4)).join('\n'));
    let themeChoice = readlineSync.question('--> ');
    let answerAndOuestion;
    for (let i = 0; i < folder.length; i += 1) {
      if (folder[i].slice(0, 1) === themeChoice) {
        const currentQuestion = folder[i];
        answerAndOuestion = getQuestion(currentQuestion);
      }
    }
    let score = 0;
    for (let i = 0; i < answerAndOuestion.length; i += 1) {
      console.log(answerAndOuestion[i][0]);
      const userAnswer = readlineSync.question('--> ');
      if (answerAndOuestion[i][1].toLowerCase() === userAnswer.toLowerCase()) {
        console.log('Молодец');
        score += 1;
      } else {
        console.log('Не молодец');
      }
    }
    console.log(`Спасибо ${score}`);
  }, 3000);
}

quiz();
// color: rgb(114, 16, 234)
// сделать разноцветным
// сделать проверку что пользователь при выборе темы ввел число
