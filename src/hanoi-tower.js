const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let turnsCount = 0;
  let secondsCount = 0;

  towerOfHanoi(disksNumber);

  function towerOfHanoi (disksNumber) {
    if (disksNumber > 0) {
      towerOfHanoi(disksNumber - 1);
      turnsCount = 2 * turnsCount + 1;
    }
  }

  secondsCount = Math.floor(3600 * turnsCount / turnsSpeed);

  var result = {turns: turnsCount, seconds: secondsCount};

  return result;
};
