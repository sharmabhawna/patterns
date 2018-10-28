const lib = require('./source/patternsLibrary.js');

const { generateDiamond } = lib;

const main = function() {
  let type = process.argv[2];
  let height = +process.argv[3];
  let diamond = generateDiamond(type, height);
  console.log(diamond);
}

main();
