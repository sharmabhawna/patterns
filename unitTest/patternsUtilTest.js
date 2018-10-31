const assert = require('assert');
const utilLib = require('../source/patternsUtility.js');

const { repeatCharacter,
  generateRectangleParameters,
  generateLine,
  generateStarLine,
  generateDashLine,
  generateHollowLine,
  upperHalf,
  bottomHalf } = utilLib;

//Tests for repeatCharacter :
assert.equal(repeatCharacter("", 0), "");
assert.equal(repeatCharacter("*", 0), "");
assert.equal(repeatCharacter("*", 1), "*");
assert.equal(repeatCharacter("-", 1), "-");
assert.equal(repeatCharacter("*", 5), "*****");
assert.equal(repeatCharacter("-", 5), "-----");

//Tests for generateRectangleParameters :
assert.deepEqual(generateRectangleParameters(1,1), [1]);
assert.deepEqual(generateRectangleParameters(1,2), [1,1]);
assert.deepEqual(generateRectangleParameters(2,1), [2]);
assert.deepEqual(generateRectangleParameters(2,2), [2,2]);

//Tests for generateLine :
let starLine = generateLine("*","*","*");
assert.equal(starLine(1), "*");
assert.equal(starLine(5), "*****");

let dashLine = generateLine("-","-","-");
assert.equal(dashLine(1), "-");
assert.equal(dashLine(5), "-----");

let hollowLine = generateLine("*"," ","*");
assert.equal(hollowLine(1), "*");
assert.equal(hollowLine(5), "*   *");

assert.equal(generateLine("/"," ","\\")(1), "/");
assert.equal(generateLine("/"," ","\\")(5), "/   \\");
assert.equal(generateLine("\\"," ","/")(1), "\\");
assert.equal(generateLine("\\"," ","/")(5), "\\   /");

//Tests for generateStarLine :
assert.deepEqual(generateStarLine(0), "");
assert.deepEqual(generateStarLine(1), "*");
assert.deepEqual(generateStarLine(2), "**");
assert.deepEqual(generateStarLine(3), "***");

//Tests for generateDashLine :
assert.deepEqual(generateDashLine(0), "");
assert.deepEqual(generateDashLine(1), "-");
assert.deepEqual(generateDashLine(2), "--");
assert.deepEqual(generateDashLine(3), "---");

//Tests for generateHollowLine :
assert.deepEqual(generateHollowLine(0), "");
assert.deepEqual(generateHollowLine(1), "*");
assert.deepEqual(generateHollowLine(2), "**");
assert.deepEqual(generateHollowLine(3), "* *");

//Tests for upperHalf :
assert.equal(upperHalf("filled", 1), "*");
assert.equal(upperHalf("filled", 5), "  *\n ***");
assert.equal(upperHalf("hollow", 1), "*");
assert.equal(upperHalf("hollow", 5), "  *\n * *");
assert.equal(upperHalf("angled", 1), "*");
assert.equal(upperHalf("angled", 5), "  *\n / \\");

//Tests for bottomHalf :
assert.equal(bottomHalf("filled", 1), "*");
assert.equal(bottomHalf("filled", 5), " ***\n  *");
assert.equal(bottomHalf("hollow", 1), "*");
assert.equal(bottomHalf("hollow", 5), " * *\n  *");
assert.equal(bottomHalf("angled", 1), "*");
assert.equal(bottomHalf("angled", 5), " \\ /\n  *");
