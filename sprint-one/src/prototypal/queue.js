const Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = {};
  obj = Object.create(queueMethods);
  return obj;
};

const queueMethods = {
  storage : {},
  first : 0,
  last : 0,
  enqueue : function push(value) {
     this.storage[this.last++] = value;
  },
  dequeue : function pop() {
    if (this.first < this.last) {
      const poped = this.storage[this.first++];
      return poped;
    } else {
      console.log("Can't pop");
    }
  },
  size : function size() {
    return this.last - this.first;
  },
};
