const graphInit = {
    tree: {0: 'C1'},
    master: ""
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        console.log(graph)
        const numCommit = [ ...graph.tree, "C" + (parseInt(graph.tree[graph.tree.length - 1].split('')[1]) + 1) ] 
        return graph
    },

}