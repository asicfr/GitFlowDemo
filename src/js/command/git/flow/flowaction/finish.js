import utils from '../../../../utils'

const updateBranchDependance = (branchDependance, currentCommit) =>
  Object.assign({}, branchDependance, {
    commit: currentCommit
  })

const deleteFlowToBranches = (branches, keyCommitDevelop, keyCommitMaster, nameBranch, branchDependance) => {
  delete branches[nameBranch]
  if (!nameBranch.includes('feature')) {
    return Object.assign({}, branches, {
      develop: updateBranchDependance(branches.develop, keyCommitDevelop),
      master: updateBranchDependance(branches.master, keyCommitMaster)
    })
  }
  return Object.assign({}, branches, {
    [branchDependance]: updateBranchDependance(branches[branchDependance], keyCommitDevelop)
  })
}

const updateFlowInCommmits = (commits, keyCommitDevelop, valueCommitDevelop, keyCommitMaster, valueCommitMaster, nameBranch, lastCommitFlow, lastCommitBranchDevelop, lastCommitBranchMaster) => {
  if (!nameBranch.includes('feature')) {
    return Object.assign({}, commits, {
      [lastCommitFlow]: Object.assign({}, commits[lastCommitFlow], {
        childs: utils.immutableSplice(commits[lastCommitFlow].childs, commits[lastCommitFlow].childs.length - 1, 0, keyCommitDevelop, keyCommitMaster)
      }),
      [lastCommitBranchDevelop]: Object.assign({}, commits[lastCommitBranchDevelop], {
        childs: utils.immutablePush(commits[lastCommitBranchDevelop].childs, keyCommitDevelop)
      }),
      [lastCommitBranchMaster]: Object.assign({}, commits[lastCommitBranchMaster], {
        childs: utils.immutablePush(commits[lastCommitBranchMaster].childs, keyCommitMaster)
      }),
      [keyCommitDevelop]: valueCommitDevelop,
      [keyCommitMaster]: valueCommitMaster
    })
  }
  return Object.assign({}, commits, {
    [lastCommitFlow]: Object.assign({}, commits[lastCommitFlow], {
      childs: utils.immutablePush(commits[lastCommitFlow].childs, keyCommitDevelop)
    }),
    [lastCommitBranchDevelop]: Object.assign({}, commits[lastCommitBranchDevelop], {
      childs: utils.immutablePush(commits[lastCommitBranchDevelop].childs, keyCommitDevelop)
    }),
    [keyCommitDevelop]: valueCommitDevelop
  })
}

const finishFlow = (gitflow, nameFlow, action, nameBranch, branchDependance) => {
  if (!gitflow.graph.branches[nameBranch]) {
    return Object.assign({}, gitflow, {
      console: `Any ${nameFlow} with this name`
    })
  }

  const keyCommitDevelop = utils.createKeyCommit(gitflow.graph.lastCommit)
  const keyCommitMaster = utils.createKeyCommit(keyCommitDevelop)
  const valueCommitDevelop = {
    parent: [gitflow.graph.branches.develop.commit],
    otherParents: [gitflow.graph.branches[nameBranch].commit],
    childs: [],
    branches: ['develop']
  }
  const valueCommitMaster = {
    parent: [gitflow.graph.branches.master.commit],
    otherParents: [gitflow.graph.branches[nameBranch].commit],
    childs: [],
    branches: ['master']
  }

  const lastCommit = (nameBranch.includes('feature')) ? keyCommitDevelop : keyCommitMaster

  return Object.assign({}, gitflow, {
    graph: Object.assign({}, gitflow.graph, {
      commits: updateFlowInCommmits(
        gitflow.graph.commits, keyCommitDevelop, valueCommitDevelop, keyCommitMaster, valueCommitMaster, nameBranch,
        gitflow.graph.branches[nameBranch].commit, gitflow.graph.branches.develop.commit, gitflow.graph.branches.master.commit
      ),
      branches: deleteFlowToBranches(gitflow.graph.branches, keyCommitDevelop, keyCommitMaster, nameBranch, branchDependance),
      currentBranch: 'develop',
      currentCommit: keyCommitDevelop,
      lastCommit
    }),
    console: `${nameBranch} is closed`
  })
}

export default finishFlow
