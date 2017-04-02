var BinarySearchTree = function(value) {
  var bst = {};

  bst.value = value;
  bst.left;
  bst.right;

  bst.insert = function (value) {
    if (bst.value === undefined) {
      bst.value = BinarySearchTree(value);
    }
    else {
      if (bst.value < value) {
        if (bst.right === undefined) {
          bst.right = BinarySearchTree(value);
        }
        else {
          bst.right.insert(value);
        }
      }
      else {
        if (bst.left === undefined) {
          bst.left = BinarySearchTree(value);
        }
        else {
          bst.left.insert(value);
        }
      }
    }
  };

  bst.contains = function (value) {
    if (bst.value === value) return true;
    else {
      if (bst.value < value) {
        if (bst.right === undefined) return false;
        else if (bst.right.value === value) return true;
        else return bst.right.contains(value);
      }
      else {
        if (bst.left === undefined) return false;
        else if (bst.left.value === value) return true;
        else return bst.left.contains(value);
      }
    }
  };

  bst.depthFirstLog = function (func) {
    if (bst.value !== undefined) func(bst.value);
    if (bst.left !== undefined) bst.left.depthFirstLog(func);
    if (bst.right !== undefined) bst.right.depthFirstLog(func);
  };

  return bst;
};

var bstt = BinarySearchTree(5);
bstt.insert(2);
//console.dir(bstt);
bstt.insert(3);
//console.dir(bstt);
bstt.insert(7);
console.log(bstt);

console.log(bstt.left.right.value);
console.log(bstt.contains(6));
/*
 * Complexity: What is the time complexity of the above functions?
 */
