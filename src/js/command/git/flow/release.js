import utils from '../../../utils'
import utilsGitFlow from './utilsGitFlow'

const addToDevelopRelease = (develop, nameRelease) => Object.assign({}, develop, {
  branches: Object.assign({}, develop.branches, {
    release: utils.immutablePush(develop.branches.release, nameRelease)
  })
})

const addReleaseToBranches = (branches, currentCommit, nameRelease) => Object.assign({}, branches, {
  develop: addToDevelopRelease(branches.develop, nameRelease),
  [nameRelease]: { commit: currentCommit }
})

const startReleaseFn = (words, graph) => {
  utilsGitFlow.checkNameBranches(words, graph)
  const nameRelease = words[4]
  return Object.assign({}, graph, {
    branches: addReleaseToBranches(graph.branches, graph.currentCommit, nameRelease),
    currentBranch: nameRelease
  })
}

const deleteReleaseInBranches = (commit, nameRelease) => {
  const indexRelease = commit.branches.indexOf(nameRelease)
  return Object.assign({}, commit, {
    branches: utils.immutableSplice(commit.branches, indexRelease, 1, 'develop')
  })
}


const deleteReleaseToDevelop = (develop, currentCommit, nameRelease) => {
  const indexRelease = develop.branches.release.indexOf(nameRelease)
  return Object.assign({}, develop, {
    commit: currentCommit,
    branches: Object.assign({}, develop.branches, {
      release: utils.immutableDelete(develop.branches.release, indexRelease)
    })
  })
}

const deleteReleaseToBranches = (branches, currentCommit, nameRelease) => {
  delete branches[nameRelease]
  return Object.assign({}, branches, {
    master: Object.assign({}, branches.master, {
      commit: currentCommit
    }),
    develop: deleteReleaseToDevelop(branches.develop, currentCommit, nameRelease)
  })
}

const updateCommitReleaseToDevelop = (commits, currentCommit, nameRelease) =>
  Object.assign({}, commits, {
    [currentCommit]: deleteReleaseInBranches(commits[currentCommit], nameRelease)
  })

const finishReleaseFn = (words, graph) => {
  if (!graph.branches[words[4]]) {
    throw new Error('Any release with this name')
  }
  return Object.assign({}, graph, {
    commits: updateCommitReleaseToDevelop(graph.commits, graph.currentCommit, words[4]),
    branches: deleteReleaseToBranches(graph.branches, graph.currentCommit, words[4]),
    currentBranch: 'develop'
  })
}

const releaseCommand = {
  start: startReleaseFn,
  finish: finishReleaseFn
}

const gitFlowRelease = (words, graph) => {
  try {
    if (utilsGitFlow.checkNameBranchesReserved(words, graph)) {
      throw new Error('this name is reserved')
    }
    return releaseCommand[words[3]](words, graph)
  } catch (err) {
    return graph
  }
}


const release = (command, gitflow) => {
  const { words } = command
  return Object.assign({}, gitflow, {
    console: utilsGitFlow.flowConsole(words, gitflow.graph, 'develop'),
    graph: gitFlowRelease(words, gitflow.graph)
  })
}

export default release
