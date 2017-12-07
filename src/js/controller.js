const analyse = require('./analyse.js')
const gc = require('./gitCommand.js')
const utils = require('./utils.js')

const graphInit = {
    tree: [{ commit: 'C0', parent:[], child: []}],
    branch: {
        master:'C0',
        develop:'C0',
        feature:[],
        hotfix:[],
        release :[],
    },
    currentBr:'develop',
    currentCm: 'C0',
    lastCm: 'C0'
}

module.exports = {
    dataControl : (t, g) => {
        const txtCommand = analyse(t)
        try {
            if(typeof gc.command[txtCommand[0]] !== "function") {
               throw new Error("Invalid Command")
            }
            return {graph: gc.command[txtCommand[0]](g, txtCommand), command: t}
        } 
        catch (error) {
            return {graph: g, command: error.message}
        }
    },
    
    init : () => {
        return graphInit
    }
}



