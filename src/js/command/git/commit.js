import utils from '../../utils'

const commandCommit = (command, graph) => {
  const currentBrSplit = graph.currentBranch.split('/')
  const splitNumber = graph.lastCommit.split(/(\d+)/)
  const keyNewCommit = `C${parseInt(splitNumber[1], 10) + 1}`
  const ValueNewCommit = {
    parent: [graph.currentCommit], otherParents: [], childs: [], branches: [currentBrSplit[0]]
  }
  return Object.assign({}, graph, {
    commits: updateTreeGraph(graph.commits, keyNewCommit, ValueNewCommit, graph.currentCommit),
    currentCommit: keyNewCommit,
    lastCommit: keyNewCommit,
    branches: updateBranch(graph.branches, graph.currentBranch, keyNewCommit)
  })
}

const updateTreeGraph = (commits, keyNewCommit, ValueNewCommit, currentCommit) => Object.assign({}, commits, {
  [currentCommit]: addChildToParent(keyNewCommit, commits[currentCommit]),
  [keyNewCommit]: ValueNewCommit
})

const addChildToParent = (child, parent) => Object.assign({}, parent, {
  childs: utils.immutablePush(parent.childs, child)
})

const updateBranch = (branches, currentbranch, keyNewCommit) => Object.assign({}, branches, {
  [currentbranch]: updateCommitOnBranch(branches[currentbranch], keyNewCommit)
})

const updateCommitOnBranch = (currentbranch, keyNewCommit) => Object.assign({}, currentbranch, {
  commit: keyNewCommit
})

const commit = (command, gitflow) => {
  const { words } = command
  if (words.length > 2) { throw new Error('Too many words') }
  return Object.assign({}, gitflow, {
    console: '',
    graph: commandCommit(words, gitflow.graph)
  })
}

export default commit
