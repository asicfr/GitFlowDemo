const constantgrid = {
  gridIn: {
    branches: ['develop', 'master'],
    columns: [
      [

      ],
      [
        { commit: 'C0', links: [], branch: 'master' }
      ]
    ]
  },
  gridOut: {
    branches: ['develop', 'master'],
    columns: [
      [
        {},
        { commit: 'C1', links: ['C0'], branch: 'develop' }
      ],
      [
        { commit: 'C0', links: ['C1'], branch: 'master' }
      ]
    ]
  },
  gridExample: {
    branches: ['develop', 'master'],
    columns: [
      [
        {},
        { commit: 'C1', links: ['C1'], branch: 'develop' }
      ],
      [
        { commit: 'C0', links: [], branch: 'master' },
        {},
        { commit: 'C2', links: ['C1'], branch: 'develop' }
      ]
    ]
  }
}
export default constantgrid
