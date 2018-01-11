import analyzeCommand from './command'

const gitflow = {
  graph: {
    commits: {
      C0: {
        parent: [], otherParents: [], childs: [], branches: ['develop', 'master']
      }
    },
    branches: {
      master: { commit: 'C0', branches: { hotfix: [] } },
      develop: { commit: 'C0', branches: { feature: [], release: [] } }
    },
    currentBranch: 'develop',
    currentCommit: 'C0',
    lastCommit: 'C0'
  },
  console: 'Bienvenue sur l\'outil de test GitFlow'
}

const getCommand = (txt) => {
  const txtOnlyOneSpace = txt.replace(/\s\s+/g, ' ')
  const txtSplit = txtOnlyOneSpace.split(' -')

  const command = {
    words: txtSplit[0].split(' '),
    args: {

    }
  }
  return command
}

const controller = {
  dataControl: (text, gitflowUpdate) => {
    const command = getCommand(text)
    try {
      return analyzeCommand(command, gitflowUpdate)
    } catch (error) {
      return Object.assign({}, gitflowUpdate, {
        console: error.message
      })
    }
  },

  init: () => gitflow
}

export default controller

