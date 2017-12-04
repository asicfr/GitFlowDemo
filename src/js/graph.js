const graphInit = {
    tree: ['C1'],
    master: ""
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        graph.tree.push("C" + (parseInt(graph.tree[graph.tree.length - 1].split('')[1]) + 1))
        return graph
    },

}