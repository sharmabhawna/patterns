const lib = require('./source/patternsLibrary.js');

const { generateFilledDiamond,
  generateHollowDiamond, 
  generateAngledDiamond } = lib;

const main = function() {
  let diamondType = process.argv[2];
  let height = +process.argv[3];
  if(height % 2 == 0){ height = height -1 };
  let diamond = "";

  if(diamondType == "filled"){
    diamond = generateFilledDiamond(height);
  }

  if(diamondType == "hollow"){
    diamond = generateHollowDiamond(height);
  }

  if(diamondType == "angled"){
    diamond = generateAngledDiamond(height);
  }
  console.log(diamond);
}

main();
