const constantfeature = {

  featureStartIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' }
      },
      currentBranch: 'develop',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },


  featureStartOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'feature/yolow': { commit: 'C1' }
      },
      currentBranch: 'feature/yolow',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: 'feature/yolow created'
  },

  featureFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['feature/yolow']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'feature/yolow': { commit: 'C2' }
      },
      currentBranch: 'feature/yolow',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  featureFinishOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2', 'C3'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: ['C3'], branches: ['feature/yolow']
        },
        C3: {
          parent: ['C1'], otherParents: ['C2'], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C3' }
      },
      currentBranch: 'develop',
      currentCommit: 'C3',
      lastCommit: 'C3'
    },
    console: 'feature/yolow is close'
  },

  featureCommitIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'feature/yolow': { commit: 'C1' }
      },
      currentBranch: 'feature/yolow',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },

  featureCommitOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['feature/yolow']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'feature/yolow': { commit: 'C2' }
      },
      currentBranch: 'feature/yolow',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  }

}


export default constantfeature
