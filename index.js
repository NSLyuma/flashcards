const fs = require('fs');
const chalk = require('chalk');
const readlineSync = require('readline-sync');

function getQuestion(string) {
  const content = fs.readFileSync(`./topic-2/${string}`, 'utf-8');
  return content.split('\n').map((row) => row.split('|'));
}

function getUserName() {
  console.clear();
  console.log(chalk.rgb(114, 16, 234).bold('Привет! 🖐'));
  console.log(
    chalk.rgb(43, 237, 234).bold('Меня зовут Эд, давай поиграем? (づ ◕‿◕ )づ')
  );
  console.log(chalk.rgb(43, 104, 237).bold('Для начала введи своё имя'));
  return readlineSync.question('--> ');
}

const userName = getUserName();

function quiz() {
  console.log(
    chalk.rgb(8, 239, 243).italic.bold(`\n${userName}`) +
      chalk.rgb(43, 104, 237)(`, выбери тему\n`)
  );
  const folder = fs.readdirSync('./topic-2');
  console.log(folder.map((file) => file.slice(0, -4)).join('\n'));
  const themeChoice = readlineSync.question('--> ');
  console.clear();

  if (!Number(themeChoice)) {
    console.log(chalk.red.bold('ЭТО НЕ ЧИСЛО! 😐'));
    quiz();
  } else if (Number(themeChoice) < 0 || Number(themeChoice) > folder.length) {
    console.log(chalk.red.bold(`Введи число от 1 до ${folder.length}! 🙄`));
    quiz();
  }

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
      console.log(chalk.green.bold('Молодец'));
      score += 1;
    } else {
      console.log(chalk.red.bold('Не молодец'));
    }
  }
  console.clear();
  console.log(
    `Спасибо, ${userName}\n Набрано ${score} из ${
      answerAndOuestion.length
    } баллов\n Хочешь сыграть ещё? Введи ${chalk.green(
      1
    )} для выхода введи ${chalk.magenta(2)}`
  );
  const nextStep = readlineSync.question('--> ');
  if (nextStep === '1') {
    quiz();
  } else {
    console.log('Спасибо за игру!');
  }
}

quiz();
