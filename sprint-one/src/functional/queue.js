var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var keys = Object.keys(storage).sort();
    if (keys.length === 0) storage[0] = value;
    else storage[keys[keys.length-1] + 1] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage).sort();
    var firstKey = keys[0];
    var popped = storage[firstKey];
    delete storage[firstKey];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
