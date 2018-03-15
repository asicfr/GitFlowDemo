import utils from '../../utils'

const addChildToParent = (child, parent) => Object.assign({}, parent, {
  childs: utils.immutablePush(parent.childs, child)
})

const createCommit = (commits, newCommit, valueCommit, currentCommit, otherParentCommit) => {
  if(commits[currentCommit].parent[0] === otherParentCommit || commits[currentCommit].otherParents[0] === otherParentCommit)
    throw new Error('Branch already up to date')

  return Object.assign({}, commits, {
    [currentCommit]: addChildToParent(newCommit, commits[currentCommit]),
    [newCommit]: valueCommit,
    [otherParentCommit]: addChildToParent(newCommit, commits[otherParentCommit])
  })
}

const updateCommitOnBranch = (currentbranch, keyNewCommit) => Object.assign({}, currentbranch, {
  commit: keyNewCommit
})

const updateBranch = (branches, currentbranch, newCommit) => Object.assign({}, branches, {
  [currentbranch]: updateCommitOnBranch(branches[currentbranch], newCommit)
})

const validMerge = (mergeBranch, currentBranch) => {
  if (mergeBranch === 'master' || mergeBranch === currentBranch) {
    return true
  }
  if (currentBranch.includes('feature') || currentBranch.includes('release') || currentBranch.includes('hotfix')) {
    if (mergeBranch === 'develop') {
      throw new Error('You can\'t merge on develop')
    }
  }
  return false
}

const commandMerge = (command, graph) => {
  const { words } = command
  if (!graph.branches[words[2]]) {
    throw new Error('Any branch with this name')
  }

  if (validMerge(words[2], graph.currentBranch)) {
    throw new Error('Branch already up-to-date')
  }
  const newCommit = `C${parseInt(graph.lastCommit.split(/(\d+)/)[1], 10) + 1}`
  const ValueNewCommit = {
    parent: [graph.currentCommit],
    otherParents: [graph.branches[words[2]].commit],
    childs: [],
    branches: [graph.currentBranch]
  }
  return Object.assign({}, graph, {
    commits: createCommit(
      graph.commits,
      newCommit, ValueNewCommit,
      graph.currentCommit,
      graph.branches[words[2]].commit
    ),
    branches: updateBranch(graph.branches, graph.currentBranch, newCommit),
    currentCommit: newCommit,
    lastCommit: newCommit
  })
}

const merge = (command, gitflow) => Object.assign({}, gitflow, {
  graph: commandMerge(command, gitflow.graph),
  console: ''
})

export default merge

