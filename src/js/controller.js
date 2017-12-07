const graph = require('./graph.js')
const analyse = require('./analyse.js')

module.exports = {
    dataControl : (t, g) => {
        const txtCommand = analyse(t)
        try {
            if(typeof command[txtCommand[0]] !== "function") {
               throw new Error("Invalid Command")
            }
            return {graph: command[txtCommand[0]](g, txtCommand), command: t}
        } 
        catch (error) {
            return {graph: g, command: error.message    }  
        }
    },
    
    init : () => {
        return graph.init()
    }
}

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

const command = {
    commit: commitFn,
    push: pushFn,
    checkout: checkoutFn
}


