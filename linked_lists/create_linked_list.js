class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const createLinkedList = (values) => {
  const dummy = new Node(null);
  let tail = dummy;
  for (let val of values){
    tail.next = new Node(val);
    tail = tail.next;
  }
  return dummy.next;
};

module.exports = {
  createLinkedList,
};
