var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Stack.prototype.push = function (value) {
  var keys = Object.keys(this.storage).sort();
  if (keys.length === 0) this.storage[0] = value;
  else this.storage[keys[keys.length-1]+1] = value;
};

Stack.prototype.pop = function () {
  var keys = Object.keys(this.storage).sort();
  var lastKey = keys[keys.length-1];
  var popped = this.storage[lastKey];
  delete this.storage[lastKey];
  return popped;
};

Stack.prototype.size = function () {
  return Object.keys(this.storage).length;
};
