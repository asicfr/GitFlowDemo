const constantfeature = {

  graphFeatureStart: {
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

  graphFeatureStart2: {
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
      feature: [{ name: 'yolow', commit: 'C1' }],
      hotfix: [],
      release: []
    },
    currentBr: 'feature/yolow',
    selectedCommit: 'C1',
    lastCm: 'C1'
  },

  graphFeatureFinsish: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C0',
      feature: [{ name: 'yolow', commit: 'C1' }],
      hotfix: [],
      release: []
    },
    currentBr: 'feature/yolow',
    selectedCommit: 'C1',
    lastCm: 'C1'
  },

  graphFeatureFinish2: {
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

  graphFeatureCommmit1: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: [], branch: ['develop']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C0',
      feature: [{ name: 'yolow', commit: 'C1' }],
      hotfix: [],
      release: []
    },
    currentBr: 'feature/yolow',
    selectedCommit: 'C1',
    lastCm: 'C1'
  },

  graphFeatureCommmit2: {
    tree: [{
      commit: 'C0', parent: [], child: ['C1'], branch: ['develop', 'master']
    },
    {
      commit: 'C1', parent: ['C0'], child: ['C2'], branch: ['develop']
    },
    {
      commit: 'C2', parent: ['C1'], child: [], branch: ['feature']
    }
    ],
    branch: {
      master: 'C0',
      develop: 'C0',
      feature: [{ name: 'yolow', commit: 'C2' }],
      hotfix: [],
      release: []
    },
    currentBr: 'feature/yolow',
    selectedCommit: 'C2',
    lastCm: 'C2'
  }
}

export default constantfeature
