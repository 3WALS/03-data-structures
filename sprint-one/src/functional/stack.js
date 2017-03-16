const Stack = function Stack() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.size = 0;

  // Implement the methods below
  someInstance.push = function push(value) {
    storage[storage.size] = value;
    storage.size += 1;
  };

  someInstance.pop = function pop() {
    if (storage.size > 0) {
      storage.size -= 1;
      const poped = storage[storage.size];
      storage[storage.size] = undefined;
      return poped;
    } else {
      console.log("Error, can't pop");
      return -1;
    }
  };

  someInstance.size = function size() {
    return storage.size;
  };

  return someInstance;
};
