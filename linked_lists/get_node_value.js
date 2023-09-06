class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const getNodeValue = (head, index) => {
  let current = head
  while (index > 0 && current !== null){
    current = current.next;
    index -= 1;
  }
  if (current === null){
    return null;
  }
  return current.val;
};

module.exports = {
  getNodeValue,
};
