const countingChange = (amount, coins, i = 0, memo = {}) => {
  const key = amount + ',' + i;
  if (key in memo) return memo[key];
  
  if (amount === 0) return 1;
  
  const coin = coins[i];
  let total = 0;
  
  for (let qty = 0; qty * coin <= amount; qty += 1){
    const remainder = amount - (qty * coin);
    total += countingChange(remainder, coins, i + 1, memo);
  }
  memo[key] = total;
  return total;
};

module.exports = {
  countingChange,
};
