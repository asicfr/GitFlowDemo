const startFn = words => `${words[2]} ${words[4]} created`

const finishFn = (words, branch) => `${words[2]} ${words[4]} finish | You are now in ${branch}`

const agrumentCommand = {
  start: startFn,
  finish: finishFn
}

const utilsGitFlow = {
  flowConsole: (words, graph, branch) => {
    if (words.length === 3) {
      return graph.branches[branch].branches[words[2]].toString()
    }
    if (words[3] === 'start' && graph.branches[words[4]]) { throw new Error('This name already exists') } else if (words[3] === 'start' || words[3] === 'finish') {
      return agrumentCommand[words[3]](words, branch)
    }
    throw new Error('Bad argument')
  },

  checkNameBranchesReserved: (words) => {
    if (words[4] === 'develop' || words[4] === 'master') {
      return true
    }
    return false
  },

  checkNameBranches: (words, graph) => {
    if (graph.branches[words[4]]) { throw new Error('This name already exists') }
  }
}

export default utilsGitFlow
