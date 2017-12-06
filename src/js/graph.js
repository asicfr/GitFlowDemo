const graphInit = {
    tree: [{ commit: 'C0', parent:[], child: []}],
    master: 'C0',
    currentCm: 'C0',
    lastCm: 'C0'
}

module.exports = {

    init: () => {
        return graphInit
    },

    addCommit: (graph) => {
        const splitNumber = graph.lastCm.split(/(\d+)/)
        const newCommit = {commit: "C" + (parseInt(splitNumber[1]) + 1), parent:[graph.currentCm], child: [] }
        graph.tree = updateTreeGraph(graph.tree, newCommit, graph.currentCm)
        graph.currentCm = newCommit.commit
        graph.lastCm = newCommit.commit
        return graph
    },
}

//fn Commit
const updateTreeGraph = (tree, n, c) => {
    tree = addCommitToTree(tree, n), addChildToParent(c, n.commit, tree)
    return tree
}

const addChildToParent = (p, c, t) => { 
    const treeParent = t.indexOf(t.find(o => o.commit === p))
    t[treeParent].child = addCommitToTree(t[treeParent].child, c)
    return t
}

const addCommitToTree = (arr, newEntry) => {
    return [ ...arr, newEntry ]      
}

//fn Push



