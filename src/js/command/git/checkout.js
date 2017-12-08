module.exports = {
    checkout: (graph, txt) => { 
        return Object.assign({}, graph, {
            currentBr: txt[2],
            currentCm: checkCommitBranch(graph, txt[2])
        })
    }
}
//fn Push
//fn checkout
const checkCommitBranch = (graph, txt) => {
    return graph.branch[txt]   
}