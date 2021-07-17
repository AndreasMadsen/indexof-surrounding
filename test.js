
var test = require('tap').test;
var indexofSurrounding = require('./indexof_surrounding.js');

test('simple case, no where, no interval', function (t) {
  var wordvector =  ['a', 'b', 'c'];
  t.equal(indexofSurrounding(wordvector, 'a'), 0);
  t.equal(indexofSurrounding(wordvector, 'b'), 1);
  t.equal(indexofSurrounding(wordvector, 'c'), 2);
  t.equal(indexofSurrounding(wordvector, 'd'), -1);
  t.end();
});

test('checks the left side first', function (t) {
  var wordvector =  ['a', 'a'];
  t.equal(indexofSurrounding(wordvector, 'a', 1), 1);
  t.end();
});

test('checks the right side secondly', function (t) {
  var wordvector =  ['a', 'b'];
  t.equal(indexofSurrounding(wordvector, 'a', 1), 0);
  t.end();
});

test('do not go beound the interval', function (t) {
  var wordvector =  ['a', 'b', 'b', 'a'];
  t.equal(indexofSurrounding(wordvector, 'a', 2, [0, 2]), 0);
  t.equal(indexofSurrounding(wordvector, 'a', 2, [1, 3]), 3);
  t.equal(indexofSurrounding(wordvector, 'a', 2, [1, 2]), -1);
  t.end();
});

test('throws RangeError if where is out of range', function (t) {
  var wordvector = ['a', 'b', 'b', 'a'];

  try {
    indexofSurrounding(wordvector, 'a', 3, [0, 2]);
  } catch (e) {
    t.equal(e.message, 'Where is outside the interval');
    t.end();
  }
});

test('list must be an array', function (t) {
  var wordvector = 'abba';

  try {
    indexofSurrounding(wordvector, 'a', 3, [0, 2]);
  } catch (e) {
    t.equal(e.message, 'List must be an array');
    t.end();
  }
});

test('interval langer than list is not a problem', function (t) {
  var wordvector = ['a', 'b', 'b', 'a'];

  t.equal(indexofSurrounding(wordvector, 'a', 2, [-1, 5]), 3);
  t.equal(indexofSurrounding(wordvector, 'c', 2, [-1, 5]), -1);
  t.end();
});


test('the README documentation', function (t) {
  var list = ['a', 'b', 'b', 'a'];

  // The result is just like indexOf
  t.equal(indexofSurrounding(list, 'a'), 0);
  t.equal(indexofSurrounding(list, 'c'), -1);

  // But you can give it a starting position, and it will also look behind
  t.equal(indexofSurrounding(list, 'a', 1), 0);
  t.equal(indexofSurrounding(list, 'a', 2), 3);

  // Futhermore you can give it an interval (more efficient than doing a `slice`)
  t.equal(indexofSurrounding(list, 'a', 1, [1,2]), -1);
  t.equal(indexofSurrounding(list, 'a', 1, [1,Infinity]), 3);

  t.end();
});
