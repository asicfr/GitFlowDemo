const checkout = require('./git/checkout.js')
const flow = require('./git/flow.js')
const push = require('./git/push.js')
const commit = require('./git/commit.js')
const utils = require('../utils.js')

const pushFn = (g) => {
    return g
}

const commitFn = (g, t) => {
    if(t.words.length > 2)
        throw new Error('Invalid argument')

    return commit.addCommit(g)
}

const checkoutFn = (g, t) => {
    return checkout.checkout(g, t.words)
}

const flowFn = (g, t) => {
    const tArray = utils.immutableShift(t.words)
    utils.checkFunction(flow.command, tArray[1])   
    return flow.command[tArray[1]](g, tArray)
}

module.exports = {
    command : {
        commit: commitFn,
        push: pushFn,
        checkout: checkoutFn,
        flow: flowFn
    }
}

