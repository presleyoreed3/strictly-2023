const semestersRequired = (numCourses, prereqs) => {
  const graph = makeGraph(numCourses, prereqs);
  const distance = {};
  for (let course in graph){
    if (graph[course].length === 0) distance[course] = 1 ;
  }
  
  for (let course in graph){
    traverseDistance(graph, course, distance);
  };
  
  return Math.max(...Object.values(distance))
};

const traverseDistance = (graph, node, distance) => {
  if (node in distance) return distance[node];
  let max = 0;
  
  for (let neighbor of graph[node]) {
    let current = traverseDistance(graph, neighbor, distance);
    if (current > max) max = current;
  }
  
  distance[node] = max + 1;
  return distance[node];
};

const makeGraph = (numCourses, prereqs) => {
  const graph = {};
  
  for (let i = 0; i < numCourses; i++){
    graph[i] = [];
  }
  
  for (let prereq of prereqs){
    const [a, b] = prereq;
    graph[a].push(b);
  }
  
  return graph;
};

module.exports = {
  semestersRequired,
};
