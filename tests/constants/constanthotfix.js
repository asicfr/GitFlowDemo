const constanthotfix = {

  hotfixStartIn: {
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

  hotfixStartOut: {
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
        master: { commit: 'C0', branches: { hotfix: ['repair'] } },
        develop: { commit: 'C1', branches: { feature: [], release: [] } },
        repair: { commit: 'C1' }
      },
      currentBranch: 'repair',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: 'hotfix repair created'
  },

  hotfixFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['repair']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: ['repair'] } },
        develop: { commit: 'C1', branches: { feature: [], release: [] } },
        repair: { commit: 'C2' }
      },
      currentBranch: 'repair',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  hotfixFinishOut: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['master']
        }
      },
      branches: {
        master: { commit: 'C2', branches: { hotfix: [] } },
        develop: { commit: 'C2', branches: { feature: [], release: [] } }
      },
      currentBranch: 'master',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: 'hotfix repair finish | You are now in master'
  }
}

export default constanthotfix
