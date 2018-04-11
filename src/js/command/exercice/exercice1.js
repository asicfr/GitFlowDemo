const exercice1 = {
  start: {
    gitFlowObject: {
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
      console: 'Exercice numéro 1 : \n\n'
        + '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n\n'
        + '\tCommit sur la branche develop, \n'
        + '\tCrée une nouvelle feature "firstExo", \n'
        + '\tCommit sur la nouvelle feature\n\n'
        + '▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n'
    },
    gridGit: {
      branches: ['develop', 'master'],
      columns: [
        [

        ],
        [
          { commit: 'C0', links: [], branch: 'master' }
        ]
      ]
    },
    exercice: '1'
  },
  end: {
    gitFlowObject: {
      graph: {
        commits: {
          C0: {
            parent: [], otherParents: [], childs: ['C1'], branches: ['master']
          },
          C1: {
            parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
          },
          C2: {
            parent: ['C1'], otherParents: [], childs: [], branches: ['feature/firstExo']
          }
        },
        branches: {
          master: { commit: 'C0' },
          develop: { commit: 'C1' },
          'feature/firstExo': { commit: 'C2' }
        },
        currentBranch: 'feature/firstExo',
        currentCommit: 'C2',
        lastCommit: 'C2'
      },
      console: 'Bravo, vous avez réussi l\'exercice'
    },
    gridGit: {
      branches: ['feature/firstExo', 'develop', 'master'],
      columns: [
        [
          {},
          {},
          { commit: 'C2', links: ['C1'], branch: 'feature/firstExo' }
        ],
        [
          {},
          { commit: 'C1', links: ['C0', 'C2'], branch: 'develop' }
        ],
        [
          { commit: 'C0', links: ['C1'], branch: 'master' }
        ]
      ]
    },
    exercice: '1'
  }
}

export default exercice1
