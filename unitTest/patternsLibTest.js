const assert = require('assert');
const lib = require('../source/patternsLibrary.js');

const { generateRectangle,
  generateTriangle,
  generateDiamond } = lib;

let filledLine = "********************";
let hollowLine = "*                  *";
let alternatingLine = "--------------------";

//Tests for filled rectangle :
assert.equal(generateRectangle({ type : "filled", width : 1, height : 2 }), "*\n*");

expected = filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine;
assert.equal(generateRectangle({type : "filled", width : 20, height : 7}), expected);

//Tests for hollow rectangle :

assert.equal(generateRectangle({type : "hollow", width : 1, height : 2}), "*\n*");

expected = filledLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + filledLine;

assert.equal(generateRectangle({type : "hollow", width : 20, height : 7}), expected);

//Tests for alternating rectangle :

assert.equal(generateRectangle({type : "alternating", width : 1, height : 2}), "*\n-");

expected = filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" + filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" + filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" +filledLine  

assert.equal(generateRectangle({type : "alternating", width : 20, height : 7}), expected);

//Tests for left aligned triangle :

assert.equal(generateTriangle({ type : "left",height : 2 }), "*\n**");
assert.equal(generateTriangle({ type : "left",height : 6 }), "*\n**\n***\n****\n*****\n******");

//Tests for right aligned triangle :

assert.equal(generateTriangle({ type : "right",height : 2 }), " *\n**");
assert.equal(generateTriangle({ type : "right",height : 6 }), "     *\n    **\n   ***\n  ****\n *****\n******");

//Tests for filled diamond :

assert.equal(generateDiamond({ type : "filled", height : 3 }), " *\n***\n *");
assert.equal(generateDiamond({ type : "filled", height : 6 }), "  *\n ***\n*****\n ***\n  *");

//Tests for hollow diamond :

assert.equal(generateDiamond({ type : "hollow", height : 3 }), " *\n* *\n *");
assert.equal(generateDiamond({ type : "hollow", height : 6 }), "  *\n * *\n*   *\n * *\n  *");

//Tests for angled diamond :

assert.equal(generateDiamond({ type : "angled", height : 3 }), " *\n* *\n *");
assert.equal(generateDiamond({ type : "angled", height : 6 }), "  *\n / \\\n*   *\n \\ /\n  *");
