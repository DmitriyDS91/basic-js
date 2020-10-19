const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(typeOfEncryptionMachine) {
    this.typeOfEncryptionMachine = typeOfEncryptionMachine;
  }

  encrypt(massage, key) {
    let spaceIndex = 0;
    let result = '';
    let a = '';
    massage = massage.toLowerCase();
    key = key.toLowerCase();

    for (i = 0; i < massage.length; i++) {
      if (/[a-z]/.test(massage[i]) === true) {
        a = String.fromCharCode((massage[i].charCodeAt() - 97 + key[(i - spaceIndex) % key.length].charCodeAt() - 97) % 26 + 97);
        result = `${result}${a}`
      } else {
        result = `${result}${massage[i]}`;
        spaceIndex++;
      }
    }

    if (this.typeOfEncryptionMachine === false) {
      return result.split('').reverse().join('').toUpperCase();
    } else {
      return result.toUpperCase();
    }
  }   

  decrypt(massage, key) {
    let spaceIndex = 0;
    let result = '';
    let a = '';
    massage = massage.toLowerCase();
    key = key.toLowerCase();

    for (i = 0; i < massage.length; i++) {
      if (/[a-z]/.test(massage[i]) === true) {
        a = String.fromCharCode((massage[i].charCodeAt() - 97 - (key[(i - spaceIndex) % key.length].charCodeAt() - 97) + 26) % 26 + 97);
        result = `${result}${a}`
      } else {
        result = `${result}${massage[i]}`;
        spaceIndex++;
      }
    }

    if (this.typeOfEncryptionMachine === false) {
      return result.split('').reverse().join('').toUpperCase();
    } else {
      return result.toUpperCase();
    }
  }
}

module.exports = VigenereCipheringMachine;
