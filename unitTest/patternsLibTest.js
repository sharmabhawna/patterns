const assert = require('assert');
const lib = require('../source/patternsLibrary.js');

const { generateRectangle,
  generateTriangle,
  generateDiamond } = lib;

let filledLine = "********************";
let hollowLine = "*                  *";
let alternatingLine = "--------------------";

//Tests for filled rectangle :
assert.equal(generateRectangle("filled", 1, 2), "*\n*");

expected = filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine 
expected  += "\n" + filledLine;
assert.equal(generateRectangle("filled", 20, 7), expected);

//Tests for hollow rectangle :

assert.equal(generateRectangle("hollow", 1, 2), "*\n*");

expected = filledLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + hollowLine 
expected  += "\n" + filledLine;

assert.equal(generateRectangle("hollow", 20, 7), expected);

//Tests for alternating rectangle :

assert.equal(generateRectangle("alternating", 1, 2), "*\n-");

expected = filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" + filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" + filledLine 
expected  += "\n" + alternatingLine 
expected  += "\n" +filledLine  

assert.equal(generateRectangle("alternating", 20, 7), expected);

//Tests for left aligned triangle :

assert.equal(generateTriangle("left", 2), "*\n**");
assert.equal(generateTriangle("left", 6), "*\n**\n***\n****\n*****\n******");

//Tests for right aligned triangle :

assert.equal(generateTriangle("right", 2), " *\n**");
assert.equal(generateTriangle("right", 6), "     *\n    **\n   ***\n  ****\n *****\n******");

//Tests for filled diamond :

assert.equal(generateDiamond("filled", 3), " *\n***\n *");
assert.equal(generateDiamond("filled", 6), "  *\n ***\n*****\n ***\n  *");

//Tests for hollow diamond :

assert.equal(generateDiamond("hollow", 3), " *\n* *\n *");
assert.equal(generateDiamond("hollow", 6), "  *\n * *\n*   *\n * *\n  *");

//Tests for angled diamond :

assert.equal(generateDiamond("angled", 3), " *\n* *\n *");
assert.equal(generateDiamond("angled", 6), "  *\n / \\\n*   *\n \\ /\n  *");
