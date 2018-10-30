const lib = require('./source/patternsLibrary.js');
const utilLib = require('./source/patternsUtility.js');

const { generateRectangle } = lib;
const { getInput } = utilLib;

const main = function(){
  let parameters = getInput();
  let rectangle = generateRectangle(parameters);
  console.log (rectangle);
}

main();
