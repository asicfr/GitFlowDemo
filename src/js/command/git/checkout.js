const commandCheckout = (branch, graph) => Object.assign({}, graph, {
  currentBranch: branch,
  currentCommit: checkCommitBranch(graph, branch)
})

const checkCommitBranch = (graph, branch) => graph.branches[branch].commit

const checkNameBranch = (words, branches) => {
  if (words[2] === 'develop' || words[2] === 'master') {
    return words[2]
  }
  const wordSplit = words[2].split('/')

  if (wordSplit[0] === 'feature') {
    return checkIfBranchExist(wordSplit[1], branches.develop.branches.feature)
  } else if (wordSplit[0] === 'release') {
    return checkIfBranchExist(wordSplit[1], branches.develop.branches.release)
  } else if (wordSplit[0] === 'hotfix') {
    return checkIfBranchExist(wordSplit[1], branches.master.branches.hotfix)
  }
  throw new Error('Any branch with this name')
}

const checkIfBranchExist = (nameBranch, arrayBranch) => {
  if (arrayBranch.indexOf(nameBranch) !== 1) {
    return nameBranch
  }
}

const checkout = (command, gitflow) => {
  const { words } = command
  const branch = checkNameBranch(words, gitflow.graph.branches)
  return Object.assign({}, gitflow, {
    graph: commandCheckout(branch, gitflow.graph),
    console: `You are now in ${words[2]}`
  })
}

export default checkout
