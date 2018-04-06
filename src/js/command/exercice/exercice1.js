const exercice1 = {
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
      + '\tCommit sur la branche dev, \n'
      + '\tCrée une nouvelle feature, \n'
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
  }
}

export default exercice1
