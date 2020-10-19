const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
 let newArray = arr.slice(0);
  if (Object.prototype.toString.call(arr) !== '[object Array]') throw new Error ();
  if (arr == []) return [];
  

  for (i = 0; i < newArray.length; i++) {
    switch (newArray[i]) {
      case '--discard-next':
        if (i + 1 < newArray.length) {
          newArray.splice(i + 1, 1, 'discarded')
          newArray.splice(i, 1);
          i = i - 1;
          discarded = true;
        } else {
          newArray.splice(i, 1);
        }
        break;
      case '--discard-prev':
        if (i >= 1 && newArray[i - 1] != 'discarded') {
          newArray.splice(i - 1, 2);
          i = i - 2;
        } else {
          newArray.splice(i, 1);
        }
        break;
      case '--double-next':
        if (i + 1 < newArray.length) {
          newArray.splice(i, 1, newArray[i + 1]);
        } else {
          newArray.splice(i, 1);
        }
        break;
      case '--double-prev':
        if (i >= 1 && newArray[i - 1] != 'discarded') {
          newArray.splice(i, 1, newArray[i - 1]);
        } else {
          newArray.splice(i, 1);
        }
        break;
    }
  }

  for (i = 0; i < newArray.length; i++) {
    if (newArray[i] == 'discarded') {
      newArray.splice(i, 1);
      i = i - 1;
    }
  }

  return newArray;
};
