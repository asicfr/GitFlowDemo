
const git = require('./command/git.js')
const utils = require('./utils.js')
const analyzeCommand = require('./command.js')

const graphInit = {
    tree: [{ commit: 'C0', parent:[], child: [], branch: ['develop', 'master']}],
    branch: {
        feature:[],
        develop:'C0',
        release :[],
        master:'C0',
        hotfix:[]
    },
    currentBr:'develop',
    selectedCommit: 'C0',
    lastCm: 'C0'
}

module.exports = {
    dataControl : (text, graph) => {
        const command = getCommand(text)
        try {
            return {graph :  analyzeCommand(command, graph), console: text}
        }
        catch (error) {
            return {graph, console: error.message}
        }
      },
    
    init : () => {
        return graphInit
    }
}

const getCommand = (txt) => {
    const txtOnlyOneSpace = txt.replace(/\s\s+/g, ' ')
    const txtSplit = txtOnlyOneSpace.split(' -')
    
    
    const command = {
        words: txtSplit[0].split(' '),
        args: {
             
        }
    }
    return command
}

    /*
const analyse = (txt) => {
    txt = txt.substring(4)
    txt = txt.split(' ')
    return txt   
}

module.exports = analyse;
*/



