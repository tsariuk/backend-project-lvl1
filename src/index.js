import promptly from 'promptly';
import * as isEven from '../games/isEven.js';
import * as calcularor from '../games/calculator.js';
import * as gcd from '../games/gcd.js';
import * as progression from '../games/progression.js';
import * as isSimple from '../games/isSimple.js';

const countOfLevels = 3;

const getAnswerAndCheck = async (rightAnswer) => {
  const userAnswer = await promptly.prompt('Your answer: ');

  if (String(userAnswer) !== String(rightAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const startGame = async (slugOfGame) => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let isGameWon;
  let selectedGame;

  switch (slugOfGame) {
    case 'isEven':
      selectedGame = isEven;
      break;
    case 'calcularor':
      selectedGame = calcularor;
      break;
    case 'gcd':
      selectedGame = gcd;
      break;
    case 'progression':
      selectedGame = progression;
      break;
    case 'isSimple':
      selectedGame = isSimple;
      break;
    default: return;
  }

  let numberOfGame = 0;

  do {
    console.log(selectedGame.rules);
    const rightAnswer = selectedGame.createTaskAndRightAnswer();
    isGameWon = await getAnswerAndCheck(rightAnswer);
    numberOfGame += 1;
  } while (isGameWon && numberOfGame < countOfLevels);

  if (!isGameWon) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
