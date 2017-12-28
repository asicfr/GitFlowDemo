const utils = require('../../../utils')

module.exports = (command, graph) => {
    const {words} = command
    return featureCommand[words[3]](words, graph)
}

const startFeatureFn = (words, graph) => {
    const newFeature = {name: words[4], commit: graph.selectedCommit}
    return Object.assign({}, graph, {
        branch: addFeature(graph.branch, newFeature),
        currentBr: 'feature/' + words[4]
    })
}

const addFeature = (branch, newFeature) => {
    return Object.assign({}, branch, {
        feature: utils.immutablePush(branch.feature, newFeature)
    })
}

const finishFeatureFn = (words, graph) => {
    return Object.assign({}, graph, {
        branch: updateBranch(graph.branch, words[4]),
        currentBr: 'develop'
    })
}

const updateBranch = (branch, nameFeature ) => {
    const index = branch.feature.indexOf(branch.feature.find(f => f.name === nameFeature))
    const commitDevelop = branch.feature[0].commit
    console.log(index)
    const newArrayFeature = utils.immutableDelete(branch.feature, index)
    console.log(newArrayFeature)
    return Object.assign({}, branch, {
        feature: newArrayFeature,
        develop: commitDevelop
    })
}

const featureCommand = {
    start: startFeatureFn,
    finish: finishFeatureFn
}