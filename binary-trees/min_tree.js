// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeMinValue = (root) => {
  let min = Infinity
  let queue = [root];
  while (queue.length > 0){
    let current = queue.pop();
    if (current.val < min){
      min = current.val;
    }
    if (current.left !== null){
      queue.push(current.left);
    }
    if (current.right !== null){
      queue.push(current.right)
    }
  }
  return min;
};

module.exports = {
  treeMinValue,
};
