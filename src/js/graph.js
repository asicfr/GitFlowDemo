const graphInit = {
        tree: [{ commit: 'C0', parent:[], child: []}],
        master: '',
        currentCm: ''
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        const parent = graph.currentCm
        const child = graph.tree.map((obj, i) => {
            console.log(obj)
        })
        const newCommit = {commit: child, parent:[], child: [] }
        return graph
    },
}

// "C" + (parseInt(graph.tree[graph.tree.length - 1].split('')[1]) + 1)