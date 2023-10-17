const _minChange = (amount, coins, memo = {}) => {
  if (amount in memo) return memo[amount];
  if (amount < 0) return Infinity;
  if (amount === 0) return 0;
  
  let minCoin = Infinity;
  
  for (let coin of coins){
    const numCoins = 1 + _minChange(amount - coin, coins, memo);
    if (numCoins < minCoin) minCoin = numCoins;
  }
  memo[amount] = minCoin;
  return minCoin;
};

const minChange = (amount, coins) => {
  const final = _minChange(amount, coins);
  if (final === Infinity) {
    return -1;
  } else {
    return final;
  }
}

module.exports = {
  minChange,
};
