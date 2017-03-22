const Stack = function() {
  var obj = {
    storage : {},
    length : 0,
  };
  _.extend(obj, stackMethods);
  return obj;
};

var stackMethods = {
  push : function push(value) {
      this.storage[this.length] = value;
      this.length += 1;
  },
  pop : function pop(value) {
    if (this.length > 0) {
      this.length -= 1;
      const poped = this.storage[this.length];
      this.storage[this.length] = undefined;
      return poped;
    } else {
      console.log("can't pop");
    }
  },
  size : function size() {
    return this.length;
  },
};
