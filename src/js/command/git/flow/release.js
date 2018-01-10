import utils from '../../../utils'

const addRelease = (branch, newRelease) => Object.assign({}, branch, {
  release: utils.immutablePush(branch.release, newRelease)
})

const startReleaseFn = (words, graph) => {
  const newRelease = { name: words[4], commit: graph.selectedCommit }
  return Object.assign({}, graph, {
    branch: addRelease(graph.branch, newRelease),
    currentBr: `release/${words[4]}`
  })
}

const updateBranch = (branch, nameRelease) => {
  const index = branch.release.indexOf(branch.release.find(f => f.name === nameRelease))
  const { commit } = branch.release[index]
  const newArrayRelease = utils.immutableDelete(branch.release, index)
  return Object.assign({}, branch, {
    release: newArrayRelease,
    develop: commit,
    master: commit
  })
}

const finishReleaseFn = (words, graph) => Object.assign({}, graph, {
  branch: updateBranch(graph.branch, words[4]),
  currentBr: 'develop'
})

const releaseCommand = {
  start: startReleaseFn,
  finish: finishReleaseFn
}


const release = (command, graph) => {
  const { words } = command
  return releaseCommand[words[3]](words, graph)
}

export default release
