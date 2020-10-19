const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chainArray: [],

  getLength() {
    return this.chainArray.length;
  },
  addLink(value) {
    if (value == null) value = 'null';
    this.chainArray.push(`( ${value.toString()} )`);
    return this;
  },
  removeLink(position) {
    if (this.chainArray[position - 1] == null) {
      this.chainArray = [];
      throw new Error();
    }
    this.chainArray.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainArray.reverse()
    return this;
  },
  finishChain() {
    let result;
    result = this.chainArray.join('~~');
    this.chainArray = [];
    return result;
  }
};

module.exports = chainMaker;
