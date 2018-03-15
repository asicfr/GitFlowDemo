const constanthotfix = {

  hotfixStartIn: {
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


  hotfixStartOut: {
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
        'hotfix/fix': { commit: 'C0' }
      },
      currentBranch: 'hotfix/fix',
      currentCommit: 'C0',
      lastCommit: 'C1'
    },
    console: 'hotfix/fix created'
  },

  hotfixFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['hotfix/fix']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'hotfix/fix': { commit: 'C2' }
      },
      currentBranch: 'hotfix/fix',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  hotfixFinishOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1', 'C4'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2', 'C3'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: ['C3', 'C4'], branches: ['hotfix/fix']
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
    console: 'hotfix/fix is close'
  },

  hotfixCommitIn: {
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
        'hotfix/fix': { commit: 'C1' }
      },
      currentBranch: 'hotfix/fix',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },

  hotfixCommitOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['fix']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' },
        'hotfix/fix': { commit: 'C2' }
      },
      currentBranch: 'hotfix/fix',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  }

}


export default constanthotfix
