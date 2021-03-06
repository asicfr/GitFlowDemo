import analyzeCommand from './command'
import grid from './grid'
import exercice from './command/exercice'
import { EPROTONOSUPPORT } from 'constants'

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

const textHelp = 'Liste de commandes git & gitflow :\n\n'
  + '- git commit\n'
  + '- git checkout branchname\n'
  + '- git checkout -b feature/branchename\n'
  + '- git checkout -b release/branchename\n'
  + '- git checkout -b hotfix/branchename\n'
  + '- git merge branchname\n'
  + '- git branch\n'
  + '- git flow feature start namebranch\n'
  + '- git flow hotfix start namebranch\n'
  + '- git flow release start nameebranch\n'
  + '- git flow feature finish namebranch\n'
  + '- git flow hotfix finish namebranch\n'
  + '- git flow release finish nameebranch\n'


const controller = {
  dataControl: (text, gitflowUpdate, gridGit, exo) => {
    const command = getCommand(text)
    try {
      if (command.words[0] === 'help') {
        alert(textHelp)
        throw new Error('')
      }
      if (command.words[0] === 'exercice') {
        return exercice(command)
      }
      if (exo) {
        return exercice(command, gitflowUpdate, exo, gridGit)
      }
      const gitFlowObject = analyzeCommand(command, gitflowUpdate)
      const newGrid = grid(gridGit, gitFlowObject, gitflowUpdate)
      return {
        gitFlowObject,
        gridGit: newGrid,
        exercice: exo
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
