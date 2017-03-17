const Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var obj = Object.create(stackMethods);
  return obj;
};

const stackMethods = {
  storage : {},
  key : 0,
  push : function push(value) {
     this.storage[this.key++] = value;
  },
  pop : function pop() {
    if (this.key > 0) {
      this.key -= 1;
      const poped = this.storage[this.key];
      this.storage[this.key] = undefined;
      return poped;
    } else {
      console.log("Can't pop");
    }
  },
  size : function size() {
    return this.key;
  },
};
