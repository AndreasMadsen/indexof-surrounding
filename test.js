# https://tea.xyz/what-is-this-file
---
version: 1.0.0
codeOwners:
  - '0x70bcc13F3488d7004214ECaC81d3F229DB2acDE2'
quorum: 1

// Import necessary modules and setup tests using the 'tap' framework
var test = require('tap').test;
var indexofSurrounding = require('./indexof_surrounding.js');

// Test Case 1: Simple Case, No Where, No Interval
test('Simple case, no where, no interval', function (t) {
  var wordvector = ['a', 'b', 'c'];
  t.equal(indexofSurrounding(wordvector, 'a'), 0);
  t.equal(indexofSurrounding(wordvector, 'b'), 1);
  t.equal(indexofSurrounding(wordvector, 'c'), 2);
  t.equal(indexofSurrounding(wordvector, 'd'), -1);
  t.end();
});

// Test Case 2: Checks the Left Side First
test('Checks the left side first', function (t) {
  var wordvector = ['a', 'a'];
  t.equal(indexofSurrounding(wordvector, 'a', 1), 1);
  t.end();
});

// Test Case 3: Checks the Right Side Secondly
test('Checks the right side secondly', function (t) {
  var wordvector = ['a', 'b'];
  t.equal(indexofSurrounding(wordvector, 'a', 1), 0);
  t.end();
});

// Test Case 4: Do Not Go Beyond the Interval
test('Do not go beyond the interval', function (t) {
  var wordvector = ['a', 'b', 'b', 'a'];
  t.equal(indexofSurrounding(wordvector, 'a', 2, [0, 2]), 0);
  t.equal(indexofSurrounding(wordvector, 'a', 2, [1, 3]), 3);
  t.equal(indexofSurrounding(wordvector, 'a', 2, [1, 2]), -1);
  t.end();
});

// Test Case 5: Throws RangeError if Where is Out of Range
test('Throws RangeError if where is out of range', function (t) {
  var wordvector = ['a', 'b', 'b', 'a'];

  // Use try-catch to handle the expected RangeError
  try {
    indexofSurrounding(wordvector, 'a', 3, [0, 2]);
  } catch (e) {
    t.equal(e.message, 'Where is outside the interval');
    t.end();
  }
});

// Test Case 6: List Must Be an Array
test('List must be an array', function (t) {
  var wordvector = 'abba';

  // Use try-catch to handle the expected error when input is not an array
  try {
    indexofSurrounding(wordvector, 'a', 3, [0, 2]);
  } catch (e) {
    t.equal(e.message, 'List must be an array');
    t.end();
  }
});

// Test Case 7: Interval Longer Than List is Not a Problem
test('Interval longer than list is not a problem', function (t) {
  var wordvector = ['a', 'b', 'b', 'a'];

  t.equal(indexofSurrounding(wordvector, 'a', 2, [-1, 5]), 3);
  t.equal(indexofSurrounding(wordvector, 'c', 2, [-1, 5]), -1);
  t.end();
});

// Test Case 8: The README Documentation
test('The README documentation', function (t) {
  var list = ['a', 'b', 'b', 'a'];

  // Test various scenarios as per the documentation
  t.equal(indexofSurrounding(list, 'a'), 0);
  t.equal(indexofSurrounding(list, 'c'), -1);
  t.equal(indexofSurrounding(list, 'a', 1), 0);
  t.equal(indexofSurrounding(list, 'a', 2), 3);
  t.equal(indexofSurrounding(list, 'a', 1, [1, 2]), -1);
  t.equal(indexofSurrounding(list, 'a', 1, [1, Infinity]), 3);

  t.end();
});
