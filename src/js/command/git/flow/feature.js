import utils from '../../../utils'

const publishFeatureFn = (words, graph) => graph

const addFeature = (branch, newFeature) => Object.assign({}, branch, {
  feature: utils.immutablePush(branch.feature, newFeature)
})

const startFeatureFn = (words, graph) => {
  const newFeature = { name: words[4], commit: graph.selectedCommit }
  return Object.assign({}, graph, {
    branch: addFeature(graph.branch, newFeature),
    currentBr: `feature/${words[4]}`
  })
}

const updateBranch = (branch, nameFeature) => {
  const index = branch.feature.indexOf(branch.feature.find(f => f.name === nameFeature))
  const commitDevelop = branch.feature[index].commit
  const newArrayFeature = utils.immutableDelete(branch.feature, index)
  return Object.assign({}, branch, {
    feature: newArrayFeature,
    develop: commitDevelop
  })
}

const finishFeatureFn = (words, graph) => {
  if (graph.branch.feature.indexOf(graph.branch.feature.find(f => f.name === words[4])) === -1) {
    throw new Error('Any feature with this name')
  }

  return Object.assign({}, graph, {
    branch: updateBranch(graph.branch, words[4]),
    currentBr: 'develop'
  })
}

const featureCommand = {
  start: startFeatureFn,
  finish: finishFeatureFn,
  publish: publishFeatureFn
}

const feature = (command, graph) => {
  const { words } = command
  return featureCommand[words[3]](words, graph)
}

export default feature
