var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {}
  this.first = 0;
  this.last = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.last++] = value;
};

Queue.prototype.dequeue = function() {
  if (this.last > this.first) {
    const dequeued = this.storage[this.first++];
    return dequeued;
  } else {
    console.log("Can't dequeue");
  }
};

Queue.prototype.size = function() {
  return this.last - this.first;
};
