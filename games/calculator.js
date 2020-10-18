const signs = ['+', '-', '*'];
const maxSizeOfNumber = 100;
export const rules = 'What is the result of the expression?';

const calculateTwoNumbers = async (firstNumber, secondNumber, sign) => {
  let resuolt = 0;
  switch (sign) {
    case '+':
      resuolt = firstNumber + secondNumber;
      break;
    case '-':
      resuolt = firstNumber - secondNumber;
      break;
    case '*':
      resuolt = firstNumber * secondNumber;
      break;
    default:
      console.log('Ошибка, знак не правильный');
  }
  return resuolt;
};

export const createTaskAndRightAnswer = async () => {
  const firstNum = Math.floor(Math.random() * maxSizeOfNumber);
  const secondNum = Math.floor(Math.random() * maxSizeOfNumber);
  const sign = signs[Math.floor(Math.random() * signs.length)];

  console.log(`Question: ${firstNum} ${sign} ${secondNum}`);

  const rightAnswer = calculateTwoNumbers(firstNum, secondNum, sign);

  return rightAnswer;
};

export default createTaskAndRightAnswer;
