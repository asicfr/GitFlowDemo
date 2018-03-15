const constantmerge = {

  mergeIn: {
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

  mergeOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1', 'C2'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C0'], otherParents: ['C1'], childs: [], branches: ['master']
        }
      },
      branches: {
        master: { commit: 'C2' },
        develop: { commit: 'C1' }
      },
      currentBranch: 'master',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  mergeIn2: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: ['C3'], branches: ['develop']
        },
        C3: {
          parent: ['C2'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C3' }
      },
      currentBranch: 'master',
      currentCommit: 'C0',
      lastCommit: 'C3'
    },
    console: ''
  },

  mergeOut2: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1', 'C4'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: ['C3'], branches: ['develop']
        },
        C3: {
          parent: ['C2'], otherParents: [], childs: ['C4'], branches: ['develop']
        },
        C4: {
          parent: ['C0'], otherParents: ['C3'], childs: [], branches: ['master']
        }
      },
      branches: {
        master: { commit: 'C4' },
        develop: { commit: 'C3' }
      },
      currentBranch: 'master',
      currentCommit: 'C4',
      lastCommit: 'C4'
    },
    console: ''
  }

}

export default constantmerge

