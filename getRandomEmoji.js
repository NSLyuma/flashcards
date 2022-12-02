const right = [
  '😏',
  '🥳',
  '😎',
  '🤓',
  '👍',
  '🐱',
  '🍬',
  '🍻',
  '🔥',
  '🌚',
  '🌝',
  '🎉',
];
const wrong = [
  '🤪',
  '😐',
  '😡',
  '💩',
  '🙈',
  '⛈',
  '⛔',
  '❌',
  '🙃',
  '🤔',
  '🤨',
  '😑',
];

function gotRightAnswer() {
  return right[Math.floor(Math.random() * right.length)];
}

function gotWrongAnswer() {
  return wrong[Math.floor(Math.random() * wrong.length)];
}

module.exports = { gotRightAnswer, gotWrongAnswer };
