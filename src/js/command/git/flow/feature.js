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
const finishFeatureFn = (g, t) => {
    return g
}

const featureCommand = {
    start: startFeatureFn,
    finish: finishFeatureFn
}