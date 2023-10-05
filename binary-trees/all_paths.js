// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

const allTreePaths = (root) => {
  if (root === null) return [];
  
  if (root.left === null && root.right === null) return [ [root.val] ]
  
  const answer = [];
  
  const leftPaths = allTreePaths(root.left);
  for (let subPath of leftPaths){
    answer.push([root.val, ...subPath])
  }
  
  const rightPaths = allTreePaths(root.right);
  for (let subPath of rightPaths){
    answer.push([root.val, ...subPath])
  }
  return answer;
};

module.exports = {
  allTreePaths,
};
