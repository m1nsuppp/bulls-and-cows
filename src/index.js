export default function BaseballGame() {
  let strike = 0, ball = 0;
  this.play = function (computerInputNumbers, userInputNumbers) {
    const myIsCorrect = isCorrect(userInputNumbers);
    for (let i = 0; i < computerInputNumbers.length; i++) {
      for (let j = 0; j < computerInputNumbers.length; j++) {
        if (computerInputNumbers[i] === userInputNumbers[j]) {
          i === j ? ++strike : ++ball;
        }
      }
    }
    return myIsCorrect ? isThreeStrike(strike, ball) : "đ";
  };
}

function isThreeLength(userInputNumbers) {
  return userInputNumbers.length !== 3;
}

function isNumber(userInputNumbers) {
  return isNaN(userInputNumbers);
}

function isDuplicated(userInputNumbers) {
  for (let idx = 0; idx < userInputNumbers.length; idx++) {
    if (userInputNumbers[idx] === userInputNumbers[idx + 1] || userInputNumbers[idx] === userInputNumbers[idx + 2]) {
      return true;
    }
  }
  return false;
}

function isCorrect(userInputNumbers) {
  for (let idx = 0; idx < userInputNumbers.length; idx++) {
    if (isDuplicated(userInputNumbers) || isThreeLength(userInputNumbers) || isNumber(userInputNumbers)) {
      alert('ėëĒģ ėë Ĩíė¨ėĩëë¤');
      return false;
    }
  }
  return true;
}

function isThreeStrike(strike, ball) {
  if (strike === 3 && ball === 0) {
    return "ė ëĩėëë¤ đ";
  } else if (strike === 0 && ball === 0) {
    return "Nothing";
  }
  return `${ball}B, ${strike}S`;
}