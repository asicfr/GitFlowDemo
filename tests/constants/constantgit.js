const constantgit = {

  graphInit: {
    tree: [{
      commit: 'C0', parent: [], child: [], branch: ['develop', 'master']
    }],
    branch: {
      master: 'C0',
      develop: 'C0',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'develop',
    selectedCommit: 'C0',
    lastCm: 'C0'
  },

  graphFinale: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C1',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'develop',
    selectedCommit: 'C1',
    lastCm: 'C1'
  },

  graphFinaleDeux: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: ['C1'], branch: ['develop']
    },
    {
      commit: 'C2', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C2',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'develop',
    selectedCommit: 'C2',
    lastCm: 'C2'
  },

  graphPush: {
    tree: [{ commit: 'C0', parent: [], child: ['C1'] },
      { commit: 'C1', parent: ['C0'], child: [] }
    ],
    branch: {
      master: 'C0',
      develop: 'C0',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'develop',
    selectedCommit: 'C0',
    lastCm: 'C1'
  },


  graphCheckoutInit: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C1',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'develop',
    selectedCommit: 'C1',
    lastCm: 'C1'
  },

  graphCheckoutFinale: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C1',
      feature: [],
      hotfix: [],
      release: []
    },
    currentBr: 'master',
    selectedCommit: 'C0',
    lastCm: 'C1'
  }

}

export default constantgit
