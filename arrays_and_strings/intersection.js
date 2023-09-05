const intersection = (a, b) => {
  const counts = {};
  for (let i = 0; i < a.length; i++){
    if (!counts[a[i]]){
      counts[a[i]] = 0
    }
    counts[a[i]] += 1;
  }
  for (let i = 0; i < b.length; i++){
    if (!counts[b[i]]){
      counts[b[i]] = 0
    }
    counts[b[i]] += 1;
  }
  let answers = [];
  for (value in counts){
    if (counts[value] > 1){
      answers.push(Number(value));
    }
  }
  return answers;
};

module.exports = {
  intersection,
};
