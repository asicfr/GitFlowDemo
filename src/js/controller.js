const graph = require('./graph.js')
const analyse = require('./analyse.js')

module.exports = {
    dataControl : (t, g) => {
        const txtCommand = analyse(t)
        try {
            return {graph: command[txtCommand](g), command: t}
        } 
        catch (error) {
            if(typeof command[txtCommand] !== "function")
            {
                return {graph: g, command: "Invalid Command"}
            }
        }
    },
    
    init : () => {
        return graph.init()
    }
}

const pushFn = (g) => {
    return g
}

const commitFn = (g) => {
    return graph.addCommit(g)
}

const command = {
    commit: commitFn,
    push: pushFn
}


