const constantrelease = {

  releaseStartIn: {
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

  releaseStartOut: {
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
        develop: { commit: 'C1', branches: { feature: [], release: ['goku'] } },
        goku: { commit: 'C1' }
      },
      currentBranch: 'goku',
      currentCommit: 'C1',
      lastCommit: 'C1'
    },
    console: 'release goku created'
  },

  releaseFinishIn: {
    graph: {
      commits: {
        C0: {
          parent: [], otherParents: [], childs: ['C1'], branches: ['develop', 'master']
        },
        C1: {
          parent: ['C0'], otherParents: [], childs: ['C2'], branches: ['develop']
        },
        C2: {
          parent: ['C1'], otherParents: [], childs: [], branches: ['goku']
        }
      },
      branches: {
        master: { commit: 'C0', branches: { hotfix: [] } },
        develop: { commit: 'C1', branches: { feature: [], release: ['goku'] } },
        goku: { commit: 'C2' }
      },
      currentBranch: 'goku',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: ''
  },

  releaseFinishOut: {
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
        master: { commit: 'C2', branches: { hotfix: [] } },
        develop: { commit: 'C2', branches: { feature: [], release: [] } }
      },
      currentBranch: 'develop',
      currentCommit: 'C2',
      lastCommit: 'C2'
    },
    console: 'release goku finish | You are now in develop'
  }
}

export default constantrelease
