const Queue = function Queue() {
  const someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  storage.first = 0;
  storage.last = 0;
  // Implement the methods below

  someInstance.enqueue = function enqueue(value) {
    storage[storage.last] = value;
    storage.last += 1;
  };

  someInstance.dequeue = function dequeue() {
    if (storage.first < storage.last) {
      const dequeued = storage[storage.first];
      storage[storage.first] = undefined;
      storage.first += 1;
      return dequeued;
    } else {
      console.log("can't dequeue");
    }
  };

  someInstance.size = function size() {
    return storage.last - storage.first;
  };

  return someInstance;
};
