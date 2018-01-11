const branch = (command, gitflow) => Object.assign({}, gitflow, {
  graph: gitflow.graph,
  console: Object.keys(gitflow.graph.branches).toString()
})

export default branch

