class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const insertNode = (head, value, index) => {
  if (index === 0){
    const newHead = new Node(value);
    newHead.next = head;
    return newHead;
  }
  
  let current = head;
  let position = 0;
  while (current !== null){
    if (position === index - 1){
      const next = current.next;
      current.next = new Node(value);
      current.next.next = next;
    }
    current = current.next;
    position += 1;
  }
  return head;
};

module.exports = {
  insertNode,
};