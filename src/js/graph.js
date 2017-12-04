const graphInit = {
    tree: ['C1'],
    master: ""
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        const last = graph.tree[graph.tree.length - 1]
        const newNumber = parseInt(last.split('')[1]) + 1
        const newCommit = "C" + newNumber
        graph.tree.push(newCommit)
        return graph
    },

}