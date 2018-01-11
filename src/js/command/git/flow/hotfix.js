import utils from '../../../utils'
import utilsGitFlow from './utilsGitFlow'


const addToMasterHotfix = (master, nameHotfix) => Object.assign({}, master, {
  branches: Object.assign({}, master.branches, {
    hotfix: utils.immutablePush(master.branches.hotfix, nameHotfix)
  })
})

const addHotfixToBranches = (branches, currentCommit, nameHotfix) => Object.assign({}, branches, {
  master: addToMasterHotfix(branches.master, nameHotfix),
  [nameHotfix]: { commit: currentCommit }
})

const startHotfixFn = (words, graph) => {
  utilsGitFlow.checkNameBranches(words, graph)
  const nameHotfix = words[4]
  return Object.assign({}, graph, {
    branches: addHotfixToBranches(graph.branches, graph.currentCommit, nameHotfix),
    currentBranch: nameHotfix
  })
}


const gitFlowHotfix = (words, graph) => {
  try {
    if (utilsGitFlow.checkNameBranchesReserved(words, graph)) {
      throw new Error('this name is reserved')
    }
    return hotfixCommand[words[3]](words, graph)
  } catch (err) {
    return graph
  }
}

const deleteHotfixToMaster = (master, currentCommit, nameHotfix) => {
  const indexHotfix = master.branches.hotfix.indexOf(nameHotfix)
  return Object.assign({}, master, {
    commit: currentCommit,
    branches: Object.assign({}, master.branches, {
      hotfix: utils.immutableDelete(master.branches.hotfix, indexHotfix)
    })
  })
}

const deleteHotfixToBranches = (branches, currentCommit, nameHotfix) => {
  delete branches[nameHotfix]
  return Object.assign({}, branches, {
    develop: Object.assign({}, branches.develop, {
      commit: currentCommit
    }),
    master: deleteHotfixToMaster(branches.master, currentCommit, nameHotfix)
  })
}

const deleteHotfixInBranches = (commit, nameHotfix) => {
  const indexHotfix = commit.branches.indexOf(nameHotfix)
  return Object.assign({}, commit, {
    branches: utils.immutableSplice(commit.branches, indexHotfix, 1, 'master')
  })
}

const updateCommitHotfixToMaster = (commits, currentCommit, nameHotfix) =>
  Object.assign({}, commits, {
    [currentCommit]: deleteHotfixInBranches(commits[currentCommit], nameHotfix)
  })


const finishHotfixFn = (words, graph) => {
  if (!graph.branches[words[4]]) {
    throw new Error('Any hotfix with this name')
  }
  return Object.assign({}, graph, {
    commits: updateCommitHotfixToMaster(graph.commits, graph.currentCommit, words[4]),
    branches: deleteHotfixToBranches(graph.branches, graph.currentCommit, words[4]),
    currentBranch: 'master'
  })
}

const hotfix = (command, gitflow) => {
  const { words } = command
  return Object.assign({}, gitflow, {
    console: utilsGitFlow.flowConsole(words, gitflow.graph, 'master'),
    graph: gitFlowHotfix(words, gitflow.graph)
  })
}

const hotfixCommand = {
  start: startHotfixFn,
  finish: finishHotfixFn
}

export default hotfix
