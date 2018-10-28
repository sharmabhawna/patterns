const generateFilledLine = function(symbol, length){
  let filledLine = "";
  for(let index = 1; index <= length; index++){
    filledLine = filledLine + symbol;
  }
  return filledLine;
}

const generateHollowLine = function (symbol, length){
  let hollowLine = "";
  hollowLine = hollowLine + symbol;
  for(let index = 1; index <= length-2; index++){
    hollowLine = hollowLine + " ";
  }
  hollowLine = hollowLine + symbol;
  return hollowLine;
}

const generateFilledRectangle = function(pattern, width, height){
  let delimiter = "";
  let result = "";
  for(let index = 0; index < height; index++){
    result = result + delimiter + generateFilledLine("*", width);
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
    result = result + delimiter + generateFilledLine(symbol, width);
    delimiter = "\n";
  }
  return result;
}

const generateHollowRectangle = function(width, height){
  let delimiter = "";
  let result = "";
  result = generateFilledLine("*", width);
  delimiter = "\n";
  for(let index = 2; index <= height-1; index++){
    result = result + delimiter + generateHollowLine("*", width);
  }
  result = result + delimiter + generateFilledLine("*", width);
  return result;
}

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
