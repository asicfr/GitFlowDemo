const utils = require('../../utils')

module.exports = (command, graph) => {
    const {words} = command
    if (words.length > 2)
        throw new Error('Too many words')

    const splitNumber = graph.lastCm.split(/(\d+)/)
    const newCommit = {commit: 'C' + (parseInt(splitNumber[1]) + 1), parent:[graph.selectedCommit], child: []}
    return Object.assign({}, graph, {
        tree : updateTreeGraph(graph.tree, newCommit, graph.selectedCommit),
        selectedCommit : newCommit.commit,
        lastCm : newCommit.commit,
        branch : updateBranch(graph.branch, graph.currentBr, newCommit.commit)
    })
}

const updateTreeGraph = (tree, newCommit, selectedCommit ) => {
    tree = utils.immutablePush(tree, newCommit), addChildToParent(selectedCommit, newCommit.commit, tree)
    return tree
}

const addChildToParent = (parent, child, tree) => { 
    const treeParent = tree.indexOf(tree.find(o => o.commit === parent))
    tree[treeParent].child = utils.immutablePush(tree[treeParent].child, child)
    return tree
}   

const updateBranch = (branch, currentbranch, newcommit) => {
    if (currentbranch.indexOf('/') > -1)
    {
       return updateWhenFlow(branch, currentbranch, newcommit)
    }
    else {
        function checkBranch(branch) {
            return branch === currentbranch
        }
        const arrayBranch = Object.keys(branch)
        branch[arrayBranch.find(checkBranch)] = newcommit
        return branch
    }
}

const updateWhenFlow = (branch, currentbranch, newcommit) => {
    const ArraySplitFlow = currentbranch.split('/')
    const index = branch[ArraySplitFlow[0]].indexOf(branch[ArraySplitFlow[0]].find(f => f.name === ArraySplitFlow[1]))
    branch[ArraySplitFlow[0]][index].commit = newcommit
    return branch
}