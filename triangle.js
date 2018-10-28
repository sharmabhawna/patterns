const lib = require('./source/patternsLibrary.js');

const { generateTriangle } = lib;

const main = function(){
  let alignment = process.argv[2];
  let height = +process.argv[3];
  let triangle = generateTriangle(alignment, height);
  console.log (triangle);
}

main();

