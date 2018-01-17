const constantgit = {

  init: {
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
    console: 'Bienvenue sur l\'outil de test GitFlow'
  },


  test: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: [], branches: ['master']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C0' },
        'feature/namefeature': {
          commit: 'C0',
          isFeature: true
        },
        'release/nameRelease': {
          commit: 'C0',
          isRelease: true
        },
        'hotfix/namehotfix': {
          commit: 'C0',
          isHotfix: true
        }
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
    console: 'This option is not supported'
  },

  commmitOut: {
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

  commmitDeuxOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: [], branches: ['master']
        },
        C1: {
          parent: [], otherParents: [], childs: [], branches: ['develop']
        },
        C2: {
          parent: [], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C2' }
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
          parent: [], otherParents: [], childs: [], branches: ['master']
        },
        C1: {
          parent: [], otherParents: [], childs: [], branches: ['develop']
        }
      },
      branches: {
        master: { commit: 'C0' },
        develop: { commit: 'C1' }
      },
      currentBranch: 'develop',
      currentCommit: 'C0',
      lastCommit: 'C1'
    },
    console: ''
  },

  checkoutFinale: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: [], branches: ['master']
        },
        C1: {
          parent: [], otherParents: [], childs: [], branches: ['develop']
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
    console: 'You are now in master'
  },

  checkoutGitFlowIn: {
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
    console: 'You are now in feature/yolow'
  }

}

export default constantgit
