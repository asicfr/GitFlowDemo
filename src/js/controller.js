
const git = require('./command/git.js')
const utils = require('./utils.js')

const graphInit = {
    tree: [{ commit: 'C0', parent:[], child: []}],
    branch: {
        master:'C0',
        develop:'C0',
        feature:[],
        hotfix:[],
        release :[]
    },
    currentBr:'develop',
    currentCm: 'C0',
    lastCm: 'C0'
}

module.exports = {
    dataControl : (command, graph) => {
        const txtCommand = getText(command)
        try {
            utils.checkFunction(git.command, txtCommand.words[1])
            return {graph: git.command[txtCommand.words[1]](graph, txtCommand), command}
        } 
        catch (error) {
            return {graph, command: error.message}
        }
    },
    
    init : () => {
        return graphInit
    }
}

const getText = (txt) => {
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



