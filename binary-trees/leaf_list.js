// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const leafList = (root) => {
  if (root === null) return [];
  if (root.left === null && root.right === null) return [root.val];
  const leafs = [];
  let stack = [root];
  while (stack.length > 0){
    let current = stack.pop();
    if (current.left === null && current.right === null){
      leafs.push(current.val);
    }
    if (current.right !== null){
      stack.push(current.right);
    }
    if (current.left !== null){
      stack.push(current.left);
    }
  }
  return leafs
};

module.exports = {
  leafList,
};