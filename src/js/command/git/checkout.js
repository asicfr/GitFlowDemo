const checkCommitBranch = (graph, branch) => graph.branches[branch].commit

const newBranch = (args, branches, currentCommit) => Object.assign({}, branches, {
  [args[1]]: { commit: currentCommit }
})

const commandCheckout = (command, graph) => {
  const { words } = command
  if (!command.args) {
    if (!graph.branches[words[2]]) { return graph }
    return Object.assign({}, graph, {
      currentBranch: words[2],
      currentCommit: checkCommitBranch(graph, words[2])
    })
  }
  const args = command.args.split(' ')
  if (args[0] !== 'b') { return graph }
  let branchDependance
  if (args[1].includes('feature/') || args[1].includes('release/')) { branchDependance = 'develop' }
  if (args[1].includes('hotfix/')) { branchDependance = 'master' }
  if (!branchDependance) {
    throw new Error('Please use feature/ release/  or hotfix/')
  }
  return Object.assign({}, graph, {
    branches: newBranch(args, graph.branches, graph.branches[branchDependance].commit),
    currentBranch: args[1],
    currentCommit: graph.branches[branchDependance].commit
  })
}

const consoleResponse = (command, graph) => {
  if (!command.args) {
    if (!graph.branches[command.words[2]]) { return 'No branch with this name' }
    return `You are now in ${command.words[2]}`
  }
  const args = command.args.split(' ')
  if (args[0] !== 'b') { return 'this simulation don\'t use args of checkout instead -b, use git flow functions' }
  return `You are now in ${args[1]}`
}

const checkout = (command, gitflow) => Object.assign({}, gitflow, {
  graph: commandCheckout(command, gitflow.graph),
  console: consoleResponse(command, gitflow.graph)
})

export default checkout
