import promptly from 'promptly';

const countOfLevels = 3;
const maxSizeOfNumber = 100;

const gcd = (num1, num2) => {
  let gcdResoult = 1;
  const smallestNum = (num1 < num2) ? num1 : num2;

  for (let i = 2; i <= smallestNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gcdResoult = i;
  }
  return gcdResoult;
};

const getAnswerAndCheck = async (firstNumber, secondNumber) => {
  const rightAnswer = gcd(firstNumber, secondNumber);
  const userAnswer = await promptly.prompt(`Find the greatest common divisor of given numbers.\nQuestion: ${firstNumber} ${secondNumber}\nYour answer: `);

  if (userAnswer !== String(rightAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const gcdGame = async () => {
  for (let numberOfGame = 0; numberOfGame < countOfLevels; numberOfGame += 1) {
    const firstNum = Math.floor(Math.random() * maxSizeOfNumber);
    const secondNum = Math.floor(Math.random() * maxSizeOfNumber);
    const isGameWon = await getAnswerAndCheck(firstNum, secondNum);
    if (!isGameWon) return false;
  }
  return true;
};

export default gcdGame;
