module.exports = {
    addCommit: (graph) => {
        const splitNumber = graph.lastCm.split(/(\d+)/)
        const newCommit = {commit: 'C' + (parseInt(splitNumber[1]) + 1), parent:[graph.currentCm], child: [] }
        return Object.assign({}, graph, {
			tree : updateTreeGraph(graph.tree, newCommit, graph.currentCm),
			currentCm : newCommit.commit,
            lastCm : newCommit.commit,
            branch : updateBranch(graph.branch, graph.currentBr, newCommit.commit)
		})
    }
}

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

const updateBranch = (branch, cb, nc) => {
    function checkBranch(branch) {
        return branch === cb
    }
    const arrayBranch = Object.keys(branch)
    branch[arrayBranch.find(checkBranch)] = nc
    return branch
}