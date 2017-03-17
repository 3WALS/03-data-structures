var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  
  someInstance.push = function(value) {
    var keys = Object.keys(storage).sort();
    if (keys.length === 0) storage[0] = value;
    else storage[keys[keys.length-1] + 1] = value;
  };

  someInstance.pop = function() {
    var keys = Object.keys(storage).sort();
    var lastKey = keys[keys.length-1];
    var popped = storage[lastKey];
    delete storage[lastKey];
    return popped;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
