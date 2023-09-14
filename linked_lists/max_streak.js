// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const longestStreak = (head) => {
  let currentStreak = 0;
  let maxStreak = 0;
  let current = head;
  let previousVal = null;
  while (current !== null){
    if (current.val === previousVal){
      currentStreak += 1;
    } else {
      currentStreak = 1;
    }

    if (currentStreak > maxStreak){
      maxStreak = currentStreak;
    }
    previousVal = current.val;
    current = current.next;
  }
  return maxStreak;