// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const treeIncludes = (root, target) => {
  if (root === null){
    return false;
  }
  let queue = [root];
  
  while (queue.length > 0){
    let current = queue.pop();
    if (current.val === target){
      return true;
    }
    
    if (current.left !== null){
      queue.push(current.left);
    }
    if (current.right !== null){
      queue.push(current.right);
    }
  }
  return false;
};

module.exports = {
  treeIncludes,
};
