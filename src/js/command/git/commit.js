import utils from '../../utils'

const updateTreeGraph = (commits, keyNewCommit, ValueNewCommit, currentCommit) => Object.assign({}, commits, {
  [currentCommit]: addChildToParent(keyNewCommit, commits[currentCommit]),
  [keyNewCommit]: ValueNewCommit
})

const addChildToParent = (child, parent) => Object.assign({}, parent, {
  childs: utils.immutablePush(parent.childs, child)
})

const updateCommitOnBranch = (currentbranch, keyNewCommit) => Object.assign({}, currentbranch, {
  commit: keyNewCommit
})

const updateBranch = (branches, currentbranch, keyNewCommit) => Object.assign({}, branches, {
  [currentbranch]: updateCommitOnBranch(branches[currentbranch], keyNewCommit)
})

const commandCommit = (command, graph) => {
  const splitNumber = graph.lastCommit.split(/(\d+)/)
  const keyNewCommit = `C${parseInt(splitNumber[1], 10) + 1}`
  const ValueNewCommit = {
    parent: [graph.currentCommit], otherParents: [], childs: [], branches: [graph.currentBranch]
  }
  return Object.assign({}, graph, {
    commits: updateTreeGraph(graph.commits, keyNewCommit, ValueNewCommit, graph.currentCommit),
    currentCommit: keyNewCommit,
    lastCommit: keyNewCommit,
    branches: updateBranch(graph.branches, graph.currentBranch, keyNewCommit)
  })
}

const commit = (command, gitflow) => {
  const { words } = command
  if (!command.args || command.args.charAt(0) === 'm') {
    if (words.length > 2) { throw new Error('That command accepts no general arguments') }
    return Object.assign({}, gitflow, {
      console: '',
      graph: commandCommit(words, gitflow.graph)
    })
  } throw new Error('This option is not supported')
}

export default commit
