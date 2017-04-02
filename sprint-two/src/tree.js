var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  newTree = _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result;
  var recurContains = function (aTree, target) {
    if (aTree.value === target) result = true;
    else if (aTree.children !== []) {
      var childrenArray = aTree.children;
      for (var treee of childrenArray) {
        recurContains(treee, target);
      }
    }
  };
  recurContains(this, target);
  if (result === undefined) return false;
  else return true;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
