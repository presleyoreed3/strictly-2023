const compress = (s) => {
  let result = '';
  let i = 0;
  let j = 0;
  while (j <= s.length){
    if (s[i] === s[j]){
      j += 1;
    } else {
      let count = j - i;
      if (count > 1){
        result += count;
        result += s[i];
      } else {
        result += s[i];
      }
      i = j;
    }
  }
  return result
};

module.exports = {
  compress,
};
