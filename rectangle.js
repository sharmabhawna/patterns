const lib = require('./source/patternsLibrary.js');

const { generateRectangle } = lib;

const main = function(){
  let type = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = generateRectangle(type, width, height);
  console.log (rectangle);
}

main();
