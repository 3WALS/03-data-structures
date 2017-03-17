var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
};

Queue.prototype.enqueue = function (value) {
  var keys = Object.keys(this.storage).sort();
  if (keys.length === 0) this.storage[0] = value;
  else this.storage[keys[keys.length-1]+1] = value;
};

Queue.prototype.dequeue = function () {
  var keys = Object.keys(this.storage).sort();
  var firstKey = keys[0];
  var dequeued = this.storage[firstKey];
  delete this.storage[firstKey];
  return dequeued;
};

Queue.prototype.size = function () {
  return Object.keys(this.storage).length;
};
