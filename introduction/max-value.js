const maxValue = (nums) => { 
  let max = -Infinity
  for (let i = 0; i < nums.length; i++){
    if (nums[i] > max){
      max = nums[i]
    }
  }
  return max;
};

module.exports = {
  maxValue,
};
