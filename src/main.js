import BaseballGame from "./index.js";

const computerInputNumbers = MissionUtils.Random.pickUniqueNumbersInRange(1, 9, 3).join('');
console.log(computerInputNumbers);
const userInput = document.querySelector('#user-input');
userInput.addEventListener('change', showTheResult);

function showTheResult() {
  const userInputNumbers = document.querySelector('#user-input').value;
  const baseballGame = new BaseballGame();
  const result = document.querySelector('#result');
  result.innerHTML = baseballGame.play(computerInputNumbers, userInputNumbers);
}