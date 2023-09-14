class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const removeNode = (head, targetVal) => {
  if (head.val === targetVal) return head.next;
  
  let current = head;
  let previous = null;
  while (current !== null){
    if (current.val === targetVal){
      previous.next = current.next;
      break;
    }
    previous = current;
    current = current.next;
  }
  return head;
};

module.exports = {
  removeNode,
};