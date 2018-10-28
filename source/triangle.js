const generateLine = function(symbol, times){
  let result = "";
  for(let index = 1; index <= times; index++){
    result = result + symbol;
  }
  return result;
}

const generateRightAlignedTriangle = function(height){
  let delimiter = "";
  let result = "";
  for(let index = 1; index <= height; index++){
    let line = "";
    line = line + generateLine(" ", height-index);
    line  = line + generateLine("*", index);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}


const generateLeftAlignedTriangle = function(height){
  let delimiter = "";
  let result = "";
  for(let index = 1; index <= height; index++){
    let line = "";
    line  = line + generateLine("*", index);
    result = result + delimiter + line;
    delimiter = "\n";
  }
  return result;
}

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

