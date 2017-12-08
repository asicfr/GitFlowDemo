module.exports = (command, graph) => {
    const {words} = command
    if (words.length > 2)
        throw new Error('Too many words')

    const splitNumber = graph.lastCm.split(/(\d+)/)
    const newCommit = {commit: 'C' + (parseInt(splitNumber[1]) + 1), parent:[graph.selectedCommit], child: [] }
    return Object.assign({}, graph, {
        tree : updateTreeGraph(graph.tree, newCommit, graph.selectedCommit),
        selectedCommit : newCommit.commit,
        lastCm : newCommit.commit,
        branch : updateBranch(graph.branch, graph.currentBr, newCommit.commit)
    })
}

const updateTreeGraph = (tree, newCommit, selectedCommit ) => {
    tree = addCommitToTree(tree, newCommit), addChildToParent(selectedCommit, newCommit.commit, tree)
    return tree
}

const addChildToParent = (parent, child, tree) => { 
    const treeParent = tree.indexOf(tree.find(o => o.commit === parent))
    tree[treeParent].child = addCommitToTree(tree[treeParent].child, child)
    return tree
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