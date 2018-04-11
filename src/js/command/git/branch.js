const branch = (command, gitflow) => {
  const { words } = command
  if (words.length > 2) { throw new Error('Invalid Command') }
  return Object.assign({}, gitflow, {
    graph: gitflow.graph,
    console: Object.keys(gitflow.graph.branches).toString()
  })
}

export default branch

