import promptly from 'promptly';

const signs = ['+', '-', '*'];
const countOfLevels = 3;
const maxSizeOfNumber = 100;

const getAnswerAndCheck = async (firstNumber, secondNumber, sign) => {
  let rightAnswer = 0;
  switch (sign) {
    case '+':
      rightAnswer = firstNumber + secondNumber;
      break;
    case '-':
      rightAnswer = firstNumber - secondNumber;
      break;
    case '*':
      rightAnswer = firstNumber * secondNumber;
      break;
    default:
      console.log('Ошибка, знак не правильный');
  }
  const userAnswer = await promptly.prompt(`What is the result of the expression?\nQuestion: ${firstNumber} ${sign} ${secondNumber}\nYour answer: `);

  if (userAnswer !== String(rightAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const calculatorGame = async () => {
  for (let numberOfGame = 0; numberOfGame < countOfLevels; numberOfGame += 1) {
    const firstNum = Math.floor(Math.random() * maxSizeOfNumber);
    const secondNum = Math.floor(Math.random() * maxSizeOfNumber);
    const sign = signs[Math.random() * signs.length];
    const isGameWon = await getAnswerAndCheck(firstNum, secondNum, sign);
    if (!isGameWon) return false;
  }
  return true;
};

export default calculatorGame;
