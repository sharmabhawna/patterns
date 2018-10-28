const repeatCharacter = function(character, times) {
  let result = "";
  for(let count = 0; count < times; count++){
    result = result + character;
  }
  return result;
}

const generateLine = function(leftEndSymbol, middleSymbol, rightEndSymbol, length) {
  if(length == 1){ return leftEndSymbol; }
  let line = leftEndSymbol;
  line = line + repeatCharacter(middleSymbol, length-2);
  line = line + rightEndSymbol;
  return line;
}

const generateFilledRectangle = function(width, height){
  let delimiter = "";
  let result = "";
  for(let index = 0; index < height; index++){
    result = result + delimiter + generateLine("*", "*", "*", width);
    delimiter = "\n";
  }
  return result;
}

const generateAlternatingRectangle = function(width,height){
  let delimiter = "";
  let result = "";
  for(let index = 0; index < height; index++){
    let symbol = "*";
    if(index % 2 != 0){
      symbol = "-";
    }
    result = result + delimiter + generateLine(symbol, symbol, symbol, width);
    delimiter = "\n";
  }
  return result;
}

const generateHollowRectangle = function(width, height){
  let delimiter = "";
  let result = "";
  result = generateLine("*", "*", "*", width);
  delimiter = "\n";
  for(let index = 2; index <= height-1; index++){
    result = result + delimiter + generateLine("*", " ", "*", width);
  }
  result = result + delimiter + generateLine("*", "*", "*", width);
  return result;
}

const generateRectangle = function(type, width, height) {
  let rectangle = generateAlternatingRectangle(width, height);
  if(type == "filled"){
    rectangle = generateFilledRectangle(width, height);
  }
  if(type == "hollow"){
    rectangle = generateHollowRectangle(width, height);
  }
  return rectangle;
}

const generateRightAlignedTriangle = function(height){
  let delimiter = "";
  let result = "";
  for(let index = 1; index <= height; index++){
    let line = repeatCharacter(" ", height-index);
    line  = line + generateLine("*", "*", "*", index);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}

const generateLeftAlignedTriangle = function(height){
  let delimiter = "";
  let result = "";
  for(let index = 1; index <= height; index++){
    let line  = generateLine("*", "*", "*", index);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}

const generateTriangle = function(alingment, height) {
  let triangle = generateRightAlignedTriangle(height);
  if(alingment == "left"){
    triangle = generateLeftAlignedTriangle(height);
  }
  return triangle;
}

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

const generateFilledDiamond = function(height){
  let pattern = "";
  pattern += upperHalf("filled", height);
  pattern += "\n" + generateLine("*", "*", "*", height);
  pattern += "\n" + bottomHalf("filled", height);
  return pattern;
}

const generateHollowDiamond = function(height) {
  let pattern = "";
  pattern += upperHalf("hollow", height);
  pattern += "\n" + generateLine("*", " ", "*", height);
  pattern += "\n" + bottomHalf("hollow", height);
  return pattern;
}

const generateAngledDiamond = function(height) {
  let pattern = "";
  pattern += upperHalf("angled", height);
  pattern += "\n" + generateLine("*", " ", "*", height);
  pattern += "\n" + bottomHalf("angled", height);
  return pattern;
}

const generateDiamond = function(type, height) {
  if(height % 2 == 0) { height = height - 1 };
  let diamond = generateAngledDiamond(height);
  if(type == "filled"){
    diamond = generateFilledDiamond(height);
  }
  if(type == "hollow"){
    diamond = generateHollowDiamond(height);
  }
  return diamond;
}

exports.generateRectangle = generateRectangle;
exports.generateTriangle = generateTriangle;
exports.generateDiamond = generateDiamond;
