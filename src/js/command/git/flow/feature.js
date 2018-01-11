import utils from '../../../utils'
import utilsGitFlow from './utilsGitFlow'


const addToDevelopFeature = (develop, nameFeature) => Object.assign({}, develop, {
  branches: Object.assign({}, develop.branches, {
    feature: utils.immutablePush(develop.branches.feature, nameFeature)
  })
})

const addFeatureToBranches = (branches, currentCommit, nameFeature) => Object.assign({}, branches, {
  develop: addToDevelopFeature(branches.develop, nameFeature),
  [nameFeature]: { commit: currentCommit }
})

const startFeatureFn = (words, graph) => {
  utilsGitFlow.checkNameBranches(words, graph)
  const nameFeature = words[4]
  return Object.assign({}, graph, {

    branches: addFeatureToBranches(graph.branches, graph.currentCommit, nameFeature),
    currentBranch: nameFeature
  })
}

const deleteFeatureInBranchesOnCommit = (commit, nameFeature) => {
  const indexFeature = commit.branches.indexOf(nameFeature)
  if (commit.branches.indexOf('develop') === -1) {
    return Object.assign({}, commit, {
      branches: utils.immutableSplice(commit.branches, indexFeature, 1, 'develop')
    })
  }

  return Object.assign({}, commit, {
    branches: utils.immutableSplice(commit.branches, indexFeature, 1)
  })
}

const deleteFeatureToDevelop = (develop, currentCommit, nameFeature) => {
  const indexFeature = develop.branches.feature.indexOf(nameFeature)
  return Object.assign({}, develop, {
    commit: currentCommit,
    branches: Object.assign({}, develop.branches, {
      feature: utils.immutableDelete(develop.branches.feature, indexFeature)
    })
  })
}

const deleteFeatureToBranches = (branches, currentCommit, nameFeature) => {
  delete branches[nameFeature]
  return Object.assign({}, branches, {
    develop: deleteFeatureToDevelop(branches.develop, currentCommit, nameFeature)
  })
}

const deleteFeatureInCommmits = (commits, currentCommit, nameFeature) =>
  Object.assign({}, commits, {
    [currentCommit]: deleteFeatureInBranchesOnCommit(commits[currentCommit], nameFeature)
  })

const finishFeatureFn = (words, graph) => {
  if (!graph.branches[words[4]]) {
    return graph
  }
  return Object.assign({}, graph, {
    commits: deleteFeatureInCommmits(graph.commits, graph.currentCommit, words[4]),
    branches: deleteFeatureToBranches(graph.branches, graph.currentCommit, words[4]),
    currentBranch: 'develop'
  })
}

const featureCommand = {
  start: startFeatureFn,
  finish: finishFeatureFn
}

const gitFlowFeature = (words, graph) => {
  try {
    if (utilsGitFlow.checkNameBranchesReserved(words, graph)) {
      throw new Error('this name is reserved')
    }
    return featureCommand[words[3]](words, graph)
  } catch (err) {
    return graph
  }
}

const feature = (command, gitflow) => {
  const { words } = command
  return Object.assign({}, gitflow, {
    console: utilsGitFlow.flowConsole(words, gitflow.graph, 'develop'),
    graph: gitFlowFeature(words, gitflow.graph)
  })
}

export default feature
