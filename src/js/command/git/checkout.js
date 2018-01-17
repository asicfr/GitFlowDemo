

const checkCommitBranch = (graph, branch) => graph.branches[branch].commit

const commandCheckout = (words, graph) => {
  if (!graph.branches[words[2]]) { return graph }
  return Object.assign({}, graph, {
    currentBranch: words[2],
    currentCommit: checkCommitBranch(graph, words[2])
  })
}

const consoleResponse = (command) => {
  if (command.args) {
    return 'this simulation don\'t use args of checkout, please use git flow functions'
  }
  return `You are now in ${command.words[2]}`
}

const checkout = (command, gitflow) => {
  const { words } = command
  return Object.assign({}, gitflow, {
    graph: commandCheckout(words, gitflow.graph),
    console: consoleResponse(command)
  })
}

export default checkout
