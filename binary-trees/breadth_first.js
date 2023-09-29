// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const breadthFirstValues = (root) => {
  if (root === null) return [];
  
  let queue = [root];
  let values = [];
  
  while (queue.length > 0){
    const node = queue.pop()
    values.push(node.val);
    
    if (node.left !== null){
      queue.unshift(node.left)
    }
    if (node.right !== null){
      queue.unshift(node.right)
    }
  }
  return values
};

module.exports = {
  breadthFirstValues,
};
