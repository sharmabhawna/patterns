const lib = require('./source/patternsLibrary.js');

const { generateFilledRectangle,
  generateHollowRectangle,
  generateAlternatingRectangle } = lib;

const main = function(){
  let pattern = process.argv[2];
  let width = +process.argv[3];
  let height = +process.argv[4];
  let rectangle = "";
  if(pattern == "filled"){ 
    rectangle = generateFilledRectangle(pattern, width, height);
  }
  if(pattern == "hollow"){
    rectangle = generateHollowRectangle(width, height);
  }
  if(pattern == "alternating"){
    rectangle = generateAlternatingRectangle(width, height);
  }
   console.log (rectangle);
}

main();
