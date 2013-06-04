
function near(list, query, where, interval) {
  // Throw error if list isn't an array
  if (Array.isArray(list) === false) {
    throw new TypeError('List must be an array');
  }

  // Start searching from the begining if where is undefined
  if (where === undefined) where = 0;

  // Interval can not be beound (0 ... list.length)
  interval = [
    (!interval || interval[0] < 0) ? 0 : interval[0],
    (!interval || interval[1] >= list.length) ? (list.length - 1) : interval[1]
  ];

  // Make sure that `where` is inside the `interval`
  if (where < interval[0] || where > interval[1]) {
    throw new RangeError('Where is outside the interval');
  }

  return search(list, query, where, interval);
}
module.exports = near;

function search(list, query, where, interval) {
  // The next side to search at, can be 0 (right) 1 (left)
  var side = 1;

  // The left and the right side of the currently searched list
  var searched = [where, where];
  var reached = [false, false];

  // Containes result (just like Array.prototype.indexOf)
  var index = -1;

  // Will stop when searched == interval
  while(true) {
    if (list[searched[side]] === query) {
      index = searched[side];
      break;
    }

    // If the we have reached one side set reached[side] to true
    if (searched[side] === interval[side]) {
      reached[side] = true;

      // stop if the opposite side is also reached
      if (reached[side ? 0 : 1]) break;
    }

    // Update the search position
    searched[side] += side ? 1 : -1;

    // If the opposite side is isn't reached then switch side
    if (reached[side ? 0 : 1] === false) {
      side = side ? 0 : 1;
    }
  }

  return index;
}
