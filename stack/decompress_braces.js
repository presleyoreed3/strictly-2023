const decompressBraces = (s) => {
  const numChars = '123456789'
  const stack = [];
  
  for (let char of s){
    if (numChars.includes(char)){
      stack.push(Number(char));
    } else {
      if (char === '}'){
        // popping chars
        let segment = '';
        while (typeof stack[stack.length - 1] !== 'number'){
          const popped = stack.pop()
          segment = popped + segment;
        }
        const num = stack.pop();
        stack.push(repeat(segment, num));
      } else if (char !== '{') {
        // alpha char
        stack.push(char);
      }
    }
  }
  return stack.join('');
};

const repeat = (segment, num) => {
  let result = '';
  for (let i = 0; i < num; i += 1){
    result += segment;
  }
  return result;
}

module.exports = {
  decompressBraces,
};
