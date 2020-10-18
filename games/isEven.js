const maxSizeOfNumber = 100;
export const rules = 'Answer "yes" if the number is even, otherwise answer "no"';

const isNumberEven = async (number) => {
  const rightAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return rightAnswer;
};

export const createTaskAndRightAnswer = async () => {
  const taskNumber = Math.floor(Math.random() * maxSizeOfNumber);
  console.log(`Question: ${taskNumber}`);
  const rightAnswer = await isNumberEven(taskNumber);

  return rightAnswer;
};

export default createTaskAndRightAnswer;
