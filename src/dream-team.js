const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let newArray = [];

  if (members == null) return false;

  for (i = 0; i < members.length; i++) {
    if (typeof members[i] == 'string') {
      newArray.push(members[i].trim().toUpperCase()[0]);
    }
  }

  newArray.sort();

  return newArray.join('');
};
