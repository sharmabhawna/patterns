const repeatCharacter = function(character, times) {
  let result = "";
  for(let count = 0; count < times; count++){
    result = result + character;
  }
  return result;
}

const generateLine = function(leftEndSymbol, middleSymbol, rightEndSymbol, length){
  let line = "";
  line = line + leftEndSymbol;
  line = line + repeatCharacter(middleSymbol, length-2);
  line = line + rightEndSymbol;
  return line;
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

const drawFilledDiamond = function(height){
  let pattern = "";
  pattern += upperHalf("filled", height);
  pattern += "\n" + generateLine("*", "*", "*", height);
  pattern += "\n" + bottomHalf("filled", height);
  return pattern;
}

const drawHollowDiamond = function(height) {
  let pattern = "";
  pattern += upperHalf("hollow", height);
  pattern += "\n" + generateLine("*", " ", "*", height);
  pattern += "\n" + bottomHalf("hollow", height);
  return pattern;
}

const drawAngledDiamond = function(height) {
  let pattern = "";
  pattern += upperHalf("angled", height);
  pattern += "\n" + generateLine("*", " ", "*", height);
  pattern += "\n" + bottomHalf("angled", height);
  return pattern;
}

const main = function() {
  let diamondType = process.argv[2];
  let height = +process.argv[3];
  if(height % 2 == 0){ height = height -1 };
  let diamond = "";

  if(diamondType == "filled"){
    diamond = drawFilledDiamond(height);
  }

  if(diamondType == "hollow"){
    diamond = drawHollowDiamond(height);
  }

  if(diamondType == "angled"){
    diamond = drawAngledDiamond(height);
  }
  console.log(diamond);
}

main();
