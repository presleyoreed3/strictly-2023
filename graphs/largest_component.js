const largestComponent = (graph) => {
  const visited = new Set();
  let max = 0;
  let count = 0;
  for (let node in graph){
    const size = explore(graph, node, visited);
    if (size > max) max = size;
  }
  return max;
};

const explore = (graph, current, visited) => {
  if (visited.has(current)) return 0;
  
  visited.add(current)
  let size = 1;
  for (let neighbor of graph[current]){
    size += explore(graph, neighbor, visited);
  }
  return size;
}

module.exports = {
  largestComponent,
};
