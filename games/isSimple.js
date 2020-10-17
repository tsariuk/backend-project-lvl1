import promptly from 'promptly';

const countOfLevels = 3;
const maxSizeOfNumber = 100;

const isNumberSimple = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }

  return 'yes';
};

const getAnswerAndCheck = async (num) => {
  console.log(`Answer "yes" if given number is prime. Otherwise answer "no".\nQuestion: ${num}`);
  const rightAnswer = isNumberSimple(num);
  const userAnswer = await promptly.prompt('\nYour answer: ');

  if (userAnswer !== String(rightAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const isSimpleGame = async () => {
  for (let numberOfGame = 0; numberOfGame < countOfLevels; numberOfGame += 1) {
    const askNumber = Math.floor(Math.random() * maxSizeOfNumber);
    const isGameWon = await getAnswerAndCheck(askNumber);
    if (!isGameWon) return false;
  }
  return true;
};

export default isSimpleGame;
