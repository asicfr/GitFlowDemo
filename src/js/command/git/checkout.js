
const checkCommitBranch = (graph, commit) => graph.branch[commit]

const checkout = (command, graph) => {
  const { words } = command
  const commit = words[2]
  return Object.assign({}, graph, {
    currentBr: commit,
    selectedCommit: checkCommitBranch(graph, commit)
  })
}

export default checkout
