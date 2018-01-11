const constantfeature = {

  featureStartIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: [], release: [] } }
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
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: ['yolow'], release: [] } },
        yolow: { commit: 'C1' }
      },
      currentBranch: 'yolow',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: 'feature yolow created'
  },

  featureFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['yolow']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: ['yolow'], release: [] } },
        yolow: { commit: 'C2' }
      },
      currentBranch: 'yolow',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  featureFinishOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C2', branches: { feature: [], release: [] } }
      },
      currentBranch: 'develop',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: 'feature yolow finish | You are now in develop'
  },

  featureCommitIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: ['yolow'], release: [] } },
        yolow: { commit: 'C1' }
      },
      currentBranch: 'yolow',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },

  featureCommitOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['yolow']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: ['yolow'], release: [] } },
        yolow: { commit: 'C2' }
      },
      currentBranch: 'yolow',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  }

}


export default constantfeature
