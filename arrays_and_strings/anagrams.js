const anagrams = (s1, s2) => {
  let count = {};
  for (let char of s1){
    if (!(char in count)) {
      count[char] = 0;
    }
    count[char] += 1;
  }
  
  for (let char of s2){
    if (count[char] === undefined) {
      return false;
    }
    count[char] -= 1;
  }
  
  for (let char in count) {
    if (count[char] !== 0){
      return false;
    }
  }
  return true
};

module.exports = {
  anagrams,
};
