const mostFrequentChar = (s) => {
  let charDict = {};
  for (let char of s){
    if (!(char in charDict)){
      charDict[char] = 0
    }
    charDict[char] += 1;
  }
  let best = null;
  for (let char of s){
    if (best === null || charDict[char] > charDict[best]) {
      best = char;
    }
  }
  return best;
};

module.exports = {
  mostFrequentChar,
};
