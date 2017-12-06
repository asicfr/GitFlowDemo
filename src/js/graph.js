const graphInit = {
    tree: [{ commit: 'C0', parent:[], child: []}],
    master: '',
    currentCm: 'C0'
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        const parent = graph.currentCm
        const lastCommit = graph.tree.pop()
        console.log(lastCommit)
        const newCommit = {commit: child, parent:[], child: [] }
        return graph
    },
}

// "C" + (parseInt(graph.tree[graph.tree.length - 1].split('')[1]) + 1)