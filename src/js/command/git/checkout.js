module.exports = (command, graph) => { 
    const {words} = command
    const commit = words[2]
    return Object.assign({}, graph, {
        currentBr: commit,
        selectedCommit: checkCommitBranch(graph,commit)
    })
}

const checkCommitBranch = (graph, commit) => {
    return graph.branch[commit]   
}