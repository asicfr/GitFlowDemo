const constantgit = {

  init: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: [], branches: ['develop', 'master']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C0', branches: { feature: [], release: [] } }
      },
      currentBranch: 'develop',
      currentCommit: 'C0',
      lastCommit: 'C0'
    },
    console: 'Bienvenue sur l\'outil de test GitFlow'
  },


  initError: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: [], branches: ['develop', 'master']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C0', branches: { feature: [], release: [] } }
      },
      currentBranch: 'develop',
      currentCommit: 'C0',
      lastCommit: 'C0'
    },
    console: 'Too many words'
  },

  commmitOut: {
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

  commmitDeuxOut: {
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
    console: ''
  },

  checkoutInit: {
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

  checkoutFinale: {
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
      currentBranch: 'master',
      currentCommit: 'C0',
      lastCommit: 'C1'
    },
    console: 'You are now in master'
  },

  checkoutGitFlowIn: {
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
      currentBranch: 'develop',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: ''
  },
  checkoutGitFlowOut: {
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
    console: 'You are now in feature/yolow'
  }

}

export default constantgit
