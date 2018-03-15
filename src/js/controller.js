import analyzeCommand from './command'
import grid from './grid'

const gitflow = {
  graph: {
    commits: {
      C0: {
        parent: [], otherParents: [], childs: [], branches: ['master']
      }
    },
    branches: {
      master: { commit: 'C0' },
      develop: { commit: 'C0' }
    },
    currentBranch: 'develop',
    currentCommit: 'C0',
    lastCommit: 'C0'
  },
  console: 'Bienvenue sur l\'outil de test GitFlow'
}

const gridInit = {

  branches: ['develop', 'master'],
  columns: [
    [

    ],
    [
      { commit: 'C0', links: [], branch: 'master' }
    ]
  ]
}

const getCommand = (txt) => {
  const txtOnlyOneSpace = txt.replace(/\s\s+/g, ' ')
  const txtSplit = txtOnlyOneSpace.split(' -')
  const command = {
    words: txtSplit[0].split(' '),
    args: txtSplit[1]
  }
  return command
}

const controller = {
  dataControl: (text, gitflowUpdate, gridGit) => {
    const command = getCommand(text)
    try {
      const gitFlowObject = analyzeCommand(command, gitflowUpdate)
      const newGrid = grid(gridGit, gitFlowObject, gitflowUpdate)
      return {
        gitFlowObject,
        gridGit: newGrid
      }
    } catch (error) {
      return {
        gitFlowObject: Object.assign({}, gitflowUpdate, {
          console: error.message
        }),
        gridGit
      }
    }
  },

  init: () => ({
    gitflow,
    gridInit
  })
}

export default controller

