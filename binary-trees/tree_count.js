// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeValueCount = (root, target) => {
  if (root === null) return 0;
  let queue = [root];
  let count = 0;
  while (queue.length > 0){
    let current = queue.pop();
    if (current.val === target) {
      count += 1;
    }
    if (current.left !== null){
      queue.push(current.left);
    }
    if (current.right !== null){
      queue.push(current.right);
    }
  }
  return count;
};

module.exports = {
  treeValueCount,
};
