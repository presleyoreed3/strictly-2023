const pairProduct = (numbers, targetProduct) => {
  let answer = [];
  for (let i = 0; i < numbers.length; i++){
    let goal = targetProduct / numbers[i];
    for (let j = 1; j < numbers.length; j++){
      if (numbers[j] === goal && j !== i){
        answer = [i,j];
      }
    }
  }
  return answer
};

module.exports = {
  pairProduct,
};
