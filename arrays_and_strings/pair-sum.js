const pairSum = (numbers, targetSum) => {
  let answer = [];
  for (let i = 0; i < numbers.length; i++){
    let goal = targetSum - numbers[i];
    for (let j = 1; j < numbers.length; j++){
      if (numbers[j] === goal && j !== i){
        answer = [i,j];
      }
    }
  }
  return answer
};

module.exports = {
  pairSum,
};
