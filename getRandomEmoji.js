const right = [
  '๐',
  '๐ฅณ',
  '๐',
  '๐ค',
  '๐',
  '๐ฑ',
  '๐ฌ',
  '๐ป',
  '๐ฅ',
  '๐',
  '๐',
  '๐',
];
const wrong = [
  '๐คช',
  '๐',
  '๐ก',
  '๐ฉ',
  '๐',
  'โ',
  'โ',
  'โ',
  '๐',
  '๐ค',
  '๐คจ',
  '๐',
];

function gotRightAnswer() {
  return right[Math.floor(Math.random() * right.length)];
}

function gotWrongAnswer() {
  return wrong[Math.floor(Math.random() * wrong.length)];
}

module.exports = { gotRightAnswer, gotWrongAnswer };
