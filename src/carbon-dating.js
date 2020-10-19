const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  
  let number = parseFloat(sampleActivity);
  
  if (typeof sampleActivity !== 'string') return false;
  if (/^[0-9\.]+$/.test(sampleActivity) === false) return false;
  if (sampleActivity.indexOf('.') !== sampleActivity.lastIndexOf('.')) return false;  
  if (number.toString() === 'NaN') return false;
  if (number <= 0 || number >= MODERN_ACTIVITY) return false;

  let activityRatio = MODERN_ACTIVITY / number;
  let rateConstant = Math.LN2 / HALF_LIFE_PERIOD;
  let result = Math.ceil(Math.log(activityRatio) / rateConstant);

  return result;
};
