var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.key = 0;
  this.storage = {};
};

Stack.prototype.push = function push(value) {
  this.storage[this.key++] = value;
};
Stack.prototype.pop = function pop(){
  if (this.key > 0) {
    return this.storage[--this.key];
  } else {
    console.log("Can't pop");
  }
};
Stack.prototype.size = function size() {
  return this.key;
};
