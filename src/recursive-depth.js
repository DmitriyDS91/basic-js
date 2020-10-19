const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, depth = 0) {
    depth = depth + 1;

    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) return this.calculateDepth(arr.flat(), depth);
      } 

    return depth;
  }
};
