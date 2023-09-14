class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const mergeLists = (head1, head2) => {
  let current1 = head1;
  let current2 = head2;
  
  let dummy = new Node(null);
  let tail = dummy;
  while (current1 !== null && current2 !== null){
    if (current1.val < current2.val){
      tail.next = current1;
      current1 = current1.next;
    } else {
      tail.next = current2;
      current2 = current2.next;
    }
    tail = tail.next;
  }
  
  if (current1 !== null) tail.next = current1;
  if (current2 !== null) tail.next = current2;
  
  return dummy.next;
};