import promptly from 'promptly';

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

const isItEvenGame = async () => {
  const name = await promptly.prompt('May I have your name? ');
  console.log(`Hello, ${name}!`);

  for (let countOfWins = 0; countOfWins < 3; countOfWins += 1) {
    const curentNumber = Math.floor(Math.random() * 100);
    const resoultOfQuestion = await getAndCheckAnswer(curentNumber);

    if (resoultOfQuestion === false) break;
    if (countOfWins === 2) console.log(`Congratulations, ${name}!`);
  }
};

export default isItEvenGame;
