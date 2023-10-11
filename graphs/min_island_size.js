const minimumIsland = (grid) => {
  const visited = new Set();
  let min = Infinity;
  
  for (let row = 0; row < grid.length; row += 1){
    for (let col = 0; col < grid[0].length; col += 1){
      const size = exploreSize(grid, row, col, visited);
      if (size > 0 && size < min){
        min = size;
      }
    }
  }
  return min;
};

const exploreSize = (grid, row, col, visited) => {
  const rowInBounds = 0 <= row && row < grid.length;
  const colInBounds = 0 <= col && col < grid[0].length;
  if (!rowInBounds || !colInBounds) return 0;
  
  if (grid[row][col] === 'W') return 0;
  
  const pos = row + ',' + col;
  if (visited.has(pos)) return 0;
  visited.add(pos);
  
  let size = 1;
  size += exploreSize(grid, row - 1, col, visited);
  size += exploreSize(grid, row + 1, col, visited);
  size += exploreSize(grid, row, col - 1, visited);
  size += exploreSize(grid, row, col + 1, visited);
  return size;
}

module.exports = {
  minimumIsland,
};
