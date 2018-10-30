const lib = require('./source/patternsLibrary.js');
const utilLib = require('./source/patternsUtility.js');

const { generateDiamond } = lib;
const { getInput } = utilLib;

const main = function() {
  let parameters = getInput();
  let diamond = generateDiamond(parameters);
  console.log(diamond);
}

main();
