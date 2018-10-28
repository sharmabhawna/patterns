const lib = require('./source/patternsLibrary.js');

const { generateLeftAlignedTriangle, 
  generateRightAlignedTriangle } = lib;

const main = function(){
  let alignment = process.argv[2];
  let height = +process.argv[3];
  let triangle = "";
  if(alignment == "left"){
    triangle = generateLeftAlignedTriangle(height);
  }
  if(alignment == "right"){
    triangle = generateRightAlignedTriangle(height);
  }
  console.log (triangle);
}

main();

