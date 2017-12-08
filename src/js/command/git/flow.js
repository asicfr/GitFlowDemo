const utils = require('../../utils.js')
const feature = require('./flow/feature.js')
const hotfix = require('./flow/hotfix.js')

const featureFn = (g, t) => {
    const tArray = utils.immutableShift(t)
    return featureCommand[tArray[1]](g, tArray)
    
}

const startFeatureFn = (g, t) => {
    const tArray = utils.immutableShift(t)
    const newFeature = {name: tArray[1], commit:g.currentCm}
    return Object.assign({}, g, {
        branch: addFeature(g.branch, newFeature),
        currentBr: 'feature/' + tArray[1]
    })
}

const addFeature = (b, nf) => {
    return Object.assign({}, b, {
        feature: utils.immutablePush(b.feature, nf)
    })
}
const finishFeatureFn = (g, t) => {
    return g
}

const featureCommand = {
    start: startFeatureFn,
    finish: finishFeatureFn
}

module.exports = {
    command : {
        feature: featureFn
    }
}
