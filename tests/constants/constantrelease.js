const constantrelease = {

  releaseStartIn: {
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
      currentBranch: 'master',
      currentCommit: 'C0',
      lastCommit: 'C1'
    },
    console: ''
  },


  releaseStartOut: {
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
        'release/goku': { commit: 'C1' }
      },
      currentBranch: 'release/goku',
      currentCommit: 'C0',
      lastCommit: 'C1'
    },
    console: 'release/goku created'
  },

  releaseFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['release/goku']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'release/goku': { commit: 'C2' }
      },
      currentBranch: 'release/goku',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  releaseFinishOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1', 'C4'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2', 'C3'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: ['C3', 'C4'], branches: ['release/goku']
        },
        C3: {
          parent: ['C1'], otherParents: ['C2'], childs: [], branches: ['develop']
        },
        C4: {
          parent: ['C0'], otherParents: ['C2'], childs: [], branches: ['master']
        }
      },
      branches: {
        master: { commit: 'C4' },
        develop: { commit: 'C3' }
      },
      currentBranch: 'develop',
      currentCommit: 'C3',
      lastCommit: 'C4'
    },
    console: 'release/goku is close'
  },

  releaseCommitIn: {
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
        'release/goku': { commit: 'C1' }
      },
      currentBranch: 'release/goku',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },

  releaseCommitOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['goku']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'release/goku': { commit: 'C2' }
      },
      currentBranch: 'release/goku',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  }

}


export default constantrelease
