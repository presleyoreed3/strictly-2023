// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const isUnivalueList = (head) => {
  let initial = head.val;
  let current = head;
  let isUniform = true;
  while (current !== null){
    if (current.val !== initial){
      isUniform = false;
    }
    current = current.next;
  }
  return isUniform;
};

module.exports = {
  isUnivalueList,
};
