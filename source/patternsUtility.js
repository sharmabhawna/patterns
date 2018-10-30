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
    let line = "";
    for(let count = 0; count < times; count++){
      line = line + character;
    }
    return line;
  }

  const generateLine = function(leftEndSymbol, middleSymbol, rightEndSymbol, length) {
    let leftBorderWidth = 1 % (length+1);
    let rightBorderwidth = 1 % length;
    let line = repeatCharacter(leftEndSymbol, leftBorderWidth);
    line = line + repeatCharacter(middleSymbol, length-2);
    line = line + repeatCharacter(rightEndSymbol, rightBorderwidth);
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

  exports.getInput = getInput;
  exports.repeatCharacter = repeatCharacter;
  exports.generateLine = generateLine;
  exports.upperHalf = upperHalf;
  exports.bottomHalf = bottomHalf;
