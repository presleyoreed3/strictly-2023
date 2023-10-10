const islandCount = (grid) => {
  const visited = new Set();
  
  let count = 0;
  for (let r = 0; r < grid.length; r += 1) {
    for (let c = 0; c < grid[0].length; c += 1) {
      if (explore(grid, r, c, visited) === true){
        count += 1;
      }
    }
  }
  return count;
};

const explore = (grid, r, c, visited) => {
  const rowInBound = 0 <= r && r < grid.length;
  const colInBound = 0 <= c && c < grid[0].length;
  if (!rowInBound || !colInBound) return false;
  
  if (grid[r][c] === 'W') return false;
  
  const position = r + ',' + c;
  if (visited.has(position)) return false;
  visited.add(position);
  
  explore(grid, r - 1, c, visited);
  explore(grid, r + 1, c, visited);
  explore(grid, r, c - 1, visited);
  explore(grid, r, c + 1, visited);
  return true;
}

module.exports = {
  islandCount,
};
