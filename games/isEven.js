import promptly from 'promptly';

const countOfLevels = 3;
const maxSizeOfNumber = 100;

const getAndCheckAnswer = async (number) => {
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  const userAnswer = await promptly.prompt(`Answer "yes" if the number is even, otherwise answer "no"\nQuestion: ${number} \nYour answer:`);

  if (userAnswer === rightAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'`);
  }

  return (userAnswer === rightAnswer);
};

const isEvenGame = async () => {
  for (let countOfWins = 0; countOfWins < countOfLevels; countOfWins += 1) {
    const currentNumber = Math.floor(Math.random() * maxSizeOfNumber);
    const isGameWon = await getAndCheckAnswer(currentNumber);
    if (!isGameWon) return false;
  }
  return true;
};

export default isEvenGame;
