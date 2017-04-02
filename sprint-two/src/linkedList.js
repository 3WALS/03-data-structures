var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    if (list.head === null) {
      list.tail = list.head = Node();
      list.tail.value = value;
    } else {
      list.tail = list.tail.next = Node(value);
      list.tail.value = value;
    }
  };

  list.removeHead = function() {
    if (list.head === null) null;
    else {
      var formerHead = list.head.value;
      list.head = list.head.next;
      return formerHead;
    }
  };

  list.contains = function(target) {
    var current = list.head;
    while (true) {
      if (current.value === target) return true;
      else if (current.next === null) return false;
      current = current.next;
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

 ll = LinkedList();
 ll.addToTail(4);
 ll.addToTail(55);
 console.log(ll, 'added');
 console.log(ll.contains(2));
