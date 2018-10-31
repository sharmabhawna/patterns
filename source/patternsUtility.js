const getInput  = function() {
  for(let i = 2; i < process.argv.length; i++){
    type = process.argv[2];
    width = +process.argv[3];
    height = +process.argv[4];
  }
  if(process.argv.length == 4){
    return { type : type, height : width };
  }
  return { type : type, width : width, height : height };
}

const repeatCharacter = function(character, times) {
  let result = "";
  for(let count = 0; count < times; count++){
    result = result + character;
  }
  return result;
}

const generateRectangleParameters = function(width, height) {
  return new Array(height).fill(width);
}

const generateLine = function(leftEndSymbol, middleSymbol, rightEndSymbol) {
  return function(length){
    let line = "";
    let leftBorderWidth = 1 % (length+1);
    let rightBorderwidth = 1 % length;
    line = repeatCharacter(leftEndSymbol, leftBorderWidth);
    line = line + repeatCharacter(middleSymbol, length-2);
    line = line + repeatCharacter(rightEndSymbol, rightBorderwidth);
  return line;
  }
}

let generateStarLine = generateLine("*","*","*");
let generateDashLine = generateLine("-","-","-");
let generateHollowLine = generateLine("*"," ","*");

const upperHalf = function(diamondType, height) {
  let pattern = "";
  let delimiter = "";
  let line = "";
  top = repeatCharacter(" ", (height-1)/2);
  top = top + repeatCharacter("*", 1) ;
  for(let row = 3; row <= height-2; row += 2){
    line = repeatCharacter(" ", (height-row)/2);
    if(diamondType == "filled"){
      line = line + generateLine("*", "*", "*", row); 
    } 
    if(diamondType == "hollow"){
      line = line + generateLine("*", " ", "*", row);
    }
    if(diamondType == "angled"){
      line = line + generateLine("/", " ", "\\", row);
    }
    pattern = pattern + delimiter + line;
    delimiter = "\n";
  }
  return top + delimiter + pattern;
}

const bottomHalf = function(diamondType, height) {
  let pattern = "";
  let delimiter = "";
  for(let row = height-2; row >= 3; row -= 2){
    let line = repeatCharacter(" ", (height-row)/2);
    if(diamondType == "filled"){
      line = line + generateLine("*", "*", "*", row); 
    } 
    if(diamondType == "hollow"){
      line = line + generateLine("*", " ", "*", row);
    }
    if(diamondType == "angled"){
      line = line + generateLine("\\", " ", "/", row);
    }
    pattern = pattern + delimiter + line;
    delimiter = "\n";
  }
  let bottom = repeatCharacter(" ", (height-1)/2);
  bottom = bottom + repeatCharacter("*", 1);
  return pattern + delimiter + bottom;
}

exports.getInput = getInput;
exports.generateRectangleParameters = generateRectangleParameters;
exports.repeatCharacter = repeatCharacter;
exports.generateLine = generateLine;
exports.generateStarLine = generateStarLine;
exports.generateDashLine = generateDashLine;
exports.generateHollowLine = generateHollowLine;
exports.upperHalf = upperHalf;
exports.bottomHalf = bottomHalf;
