const assert = require('assert');
const utilLib = require('../source/patternsUtility.js');

const { repeatCharacter,
  generateLine,
  upperHalf,
  bottomHalf } = utilLib;

//Tests for repeatCharacter :
assert.equal(repeatCharacter("", 0), "");
assert.equal(repeatCharacter("*", 0), "");
assert.equal(repeatCharacter("*", 1), "*");
assert.equal(repeatCharacter("-", 1), "-");
assert.equal(repeatCharacter("*", 5), "*****");
assert.equal(repeatCharacter("-", 5), "-----");

//Tests for generateLine :
assert.equal(generateLine("*","*","*", 1), "*");
assert.equal(generateLine("*","*","*", 5), "*****");
assert.equal(generateLine("-","-","-", 1), "-");
assert.equal(generateLine("-","-","-", 5), "-----");
assert.equal(generateLine("*"," ","*", 1), "*");
assert.equal(generateLine("*"," ","*", 5), "*   *");
assert.equal(generateLine("/"," ","\\", 1), "/");
assert.equal(generateLine("/"," ","\\", 5), "/   \\");
assert.equal(generateLine("\\"," ","/", 1), "\\");
assert.equal(generateLine("\\"," ","/", 5), "\\   /");

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
