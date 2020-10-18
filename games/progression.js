const maxSizeOfFirstElement = 20;
const maxSizeOfStep = 20;
const sizeOfProgression = 10;
export const rules = 'What number is missing in the progression?';

export const createTaskAndRightAnswer = async () => {
  const progression = [];
  const firstElement = Math.floor(Math.random() * maxSizeOfFirstElement);
  const stepProgression = Math.floor(Math.random() * maxSizeOfStep);
  const numberOfBlankElement = Math.floor(Math.random() * sizeOfProgression);

  for (let i = 0; i < sizeOfProgression; i += 1) {
    if (i === numberOfBlankElement) {
      progression.push('..');
    } else {
      progression.push(firstElement + i * stepProgression);
    }
  }
  const stringProgression = progression.join(' ');
  console.log(`Question: ${stringProgression}`);

  return numberOfBlankElement * stepProgression + firstElement;
};

export default createTaskAndRightAnswer;
