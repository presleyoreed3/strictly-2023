// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeSum = (root) => {
  if (root === null){
    return 0;
  }
  let queue = [root];
  let sum = 0;
  while (queue.length > 0){
    let current = queue.pop();
    sum += current.val;
    
    if (current.left !== null){
      queue.push(current.left)
    }
    if (current.right !== null){
      queue.push(current.right);
    }
  }
  return sum;
};

module.exports = {
  treeSum,
};
