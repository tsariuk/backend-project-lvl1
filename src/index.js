import promptly from 'promptly';
import isEven from '../games/isEven.js';
import calcularor from '../games/calculator.js';
import gcd from '../games/gcd.js';
import progression from '../games/progression.js';
import isSimple from '../games/isSimple.js';

const startGame = async (slugOfGame) => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

  let isGameWon;

  switch (slugOfGame) {
    case 'isEven':
      isGameWon = await isEven();
      break;
    case 'calcularor':
      isGameWon = await calcularor();
      break;
    case 'gcd':
      isGameWon = await gcd();
      break;
    case 'progression':
      isGameWon = await progression();
      break;
    case 'isSimple':
      isGameWon = await isSimple();
      break;
    default: return;
  }

  if (!isGameWon) {
    console.log(`Let's try again, ${name}!`);
  } else {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
