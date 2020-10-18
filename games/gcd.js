const maxSizeOfNumber = 100;
export const rules = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  let gcdResoult = 1;
  const smallestNum = (num1 < num2) ? num1 : num2;

  for (let i = 2; i <= smallestNum; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) gcdResoult = i;
  }
  return gcdResoult;
};

export const createTaskAndRightAnswer = async () => {
  const firstNum = Math.floor(Math.random() * maxSizeOfNumber);
  const secondNum = Math.floor(Math.random() * maxSizeOfNumber);
  const rightAnswer = gcd(firstNum, secondNum);

  console.log(`Question: ${firstNum} ${secondNum}`);

  return rightAnswer;
};

export default createTaskAndRightAnswer;
