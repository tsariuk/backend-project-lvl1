const maxSizeOfNumber = 100;
export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isNumberSimple = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) return 'no';
  }
  return 'yes';
};

export const createTaskAndRightAnswer = async () => {
  const askNumber = Math.floor(Math.random() * maxSizeOfNumber);
  console.log(`Question: ${askNumber}`);
  const rightAnswer = isNumberSimple(askNumber);
  return rightAnswer;
};

export default createTaskAndRightAnswer;
