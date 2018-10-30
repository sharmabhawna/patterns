const lib = require('./source/patternsLibrary.js');
const utilLib = require('./source/patternsUtility.js');

const { generateTriangle } = lib;
const { getInput } = utilLib;

const main = function(){
  let parameters = getInput();
  let triangle = generateTriangle(parameters);
  console.log (triangle);
}

main();

