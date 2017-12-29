const utils = require('../../../utils')

module.exports = (command, graph) => {
    const {words} = command
    return releaseCommand[words[3]](words, graph)
}

const startReleaseFn = (words, graph) => {
    const newRelease = {name: words[4], commit: graph.selectedCommit}
    return Object.assign({}, graph, {
        branch: addRelease(graph.branch, newRelease),
        currentBr: 'release/' + words[4]
    })
}

const addRelease = (branch, newRelease) => {
    return Object.assign({}, branch, {
        release: utils.immutablePush(branch.release, newRelease)
    })
}

const finishReleaseFn = (words, graph) => {
    return Object.assign({}, graph, {
        branch: updateBranch(graph.branch, words[4]),
        currentBr: 'develop'
    })
}

const updateBranch = (branch, nameRelease ) => {
    const index = branch.release.indexOf(branch.release.find(f => f.name === nameRelease))
    const commit = branch.release[index].commit
    const newArrayRelease = utils.immutableDelete(branch.release, index)
    return Object.assign({}, branch, {
        release: newArrayRelease,
        develop: commit,
        master: commit
    })
}

const releaseCommand = {
    start: startReleaseFn,
    finish: finishReleaseFn
}