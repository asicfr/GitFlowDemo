const addFlowToBranches = (branches, currentCommit, nameBranch, branchDependance) =>
  Object.assign({}, branches, {
    [nameBranch]: { commit: branches[branchDependance].commit }
  })

const start = (gitflow, nameFlow, action, nameBranch, branchDependance) => {
  if (gitflow.graph.branches[nameBranch]) {
    return Object.assign({}, gitflow, {
      console: `${nameBranch} already exists`
    })
  }

  return Object.assign({}, gitflow, {
    graph: Object.assign({}, gitflow.graph, {
      branches: addFlowToBranches(
        gitflow.graph.branches,
        gitflow.graph.currentCommit,
        nameBranch,
        branchDependance
      ),
      currentBranch: nameBranch,
      currentCommit: gitflow.graph.branches[branchDependance].commit
    }),
    console: `${nameBranch} created`
  })
}

export default start
