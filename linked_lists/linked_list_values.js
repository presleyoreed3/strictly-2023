class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListValues = (head) => {
  const answer = [];
  let current = head;
  while (current !== null){
    answer.push(current.val);
    current = current.next;
  }
  return answer;
};

module.exports = {
  linkedListValues,
};
