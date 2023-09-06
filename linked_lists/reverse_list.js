class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const reverseList = (head) => {
  let current = head;
  let prev = null;
  while (current !== null){
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};

module.exports = {
  reverseList,
};
