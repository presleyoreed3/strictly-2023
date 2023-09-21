class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListFind = (head, target) => {
  let current = head;
  let isPresent = false;
  while (current !== null){
    if (current.val === target){
      isPresent = true;
    }
    current = current.next;
  }
  return isPresent;
};

module.exports = {
  linkedListFind,
};
