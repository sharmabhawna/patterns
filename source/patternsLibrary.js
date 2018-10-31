const utilLib = require('./patternsUtility.js');

const { repeatCharacter,
  generateRectangleParameters,
  generateStarLine,
  generateDashLine,
  generateHollowLine,
  upperHalf,
  bottomHalf } = utilLib;

const generateFilledRectangle = rectangleGenerator(generateStarLine, generateStarLine, generateStarLine);

const generateHollowRectangle = rectangleGenerator(generateStarLine, generateHollowLine, generateStarLine);

const rectangleGenerator = function(topLine, middleLine, bottomLine) {
  return function(width, height){
    let top = topLine(width);
    let middle =  generateRectangleParameters(width, height-2).map(middleLine).join("\n");
    let bottom =  bottomLine(width);
    return top + "\n" + middle + "\n" + bottom;
}

const generateRectangle = function(parameters) {
  let rectangle = generateAlternatingRectangle(parameters.width, parameters.height);
  if(parameters.type == "filled"){
    generateFilledRectangle(parameters.width, parameters.height);
  }
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

const generateTriangle = function(parameters) {
  let triangle = generateRightAlignedTriangle(parameters.height);
  if(parameters.type == "left"){
    triangle = generateLeftAlignedTriangle(parameters.height);
  }
  return triangle;
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

const generateDiamond = function(parameters) {
  let { type } = parameters;
  let { height } = parameters;
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
