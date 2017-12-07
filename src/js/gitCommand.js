const graph = require('./graph.js')
const gfc = require('./gitflowCommand.js')
const utils = require('./utils.js')

const pushFn = (g) => {
    return g
}

const commitFn = (g, t) => {
    if(t.length > 1)
        throw new Error('Invalid argument')

    return graph.addCommit(g)
}

const checkoutFn = (g, t) => {
    return graph.checkout(g, t)
}

const flowFn = (g, t) => {
    console.log(utils.immutableShift(t))
    const r = gfc.flowCommand[utils.immutableShift(t)[0]](g, t)
    return g
}

module.exports = {
    command : {
        commit: commitFn,
        push: pushFn,
        checkout: checkoutFn,
        flow: flowFn
    }
}

