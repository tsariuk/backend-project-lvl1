import promptly from 'promptly';

const countOfLevels = 3;
const maxSizeOfFirstElement = 20;
const maxSizeOfStep = 20;
const sizeOfProgression = 10;

const creatAndShowProgressionWithGap = () => {
  const progression = [];
  const firstElement = Math.floor(Math.random() * maxSizeOfFirstElement);
  const stepProgression = Math.floor(Math.random() * maxSizeOfStep);
  const numberOfBlankElement = Math.floor(Math.random() * sizeOfProgression);

  for (let i = 0; i < sizeOfProgression; i += 1) {
    if (i === numberOfBlankElement) {
      progression.push('..');
    } else {
      progression.push(String(firstElement + i * stepProgression));
    }
  }
  console.log(progression.join(' '));
  return numberOfBlankElement * stepProgression + firstElement;
};

const getAnswerAndCheck = async () => {
  console.log('Find the greatest common divisor of given numbers.\nQuestion:');
  const rightAnswer = creatAndShowProgressionWithGap();
  const userAnswer = await promptly.prompt('\nYour answer: ');

  if (userAnswer !== String(rightAnswer)) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    return false;
  }
  console.log('Correct!');
  return true;
};

const progressionGame = async () => {
  for (let numberOfGame = 0; numberOfGame < countOfLevels; numberOfGame += 1) {
    const isGameWon = await getAnswerAndCheck();
    if (!isGameWon) return false;
  }
  return true;
};

export default progressionGame;
