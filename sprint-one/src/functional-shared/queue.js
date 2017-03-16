var Queue = function() {
  var obj = {
    storage : {},
    first : 0,
    last: 0,
  };
  _.extend(obj, queueMethods);
  return obj;
};

var queueMethods = {
  enqueue : function enqueue(value) {
    this.storage[this.last] = value;
    this.last += 1;
  },
  dequeue : function dequeue() {
    if (this.first < this.last) {
      const dequeued = this.storage[this.first];
      this.storage[this.first] = undefined;
      this.first += 1;
      return dequeued
    } else {
      console.log("can't dequeued")
    }
  },
  size : function size() {
    return this.last - this.first;
  },
};
