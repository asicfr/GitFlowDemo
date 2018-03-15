import utils from './utils'

const getParent = (grid, gitFlow, commit) => grid.map(columns => (
  columns.findIndex(rows => rows.commit === commit.parent[0])
)).filter((val, i) => i !== -1)

const getOtherParent = (grid, gitFlow, commit) => grid.map(columns => (
  columns.findIndex(rows => rows.commit === commit.otherParents[0])
)).filter((val, i) => i !== -1)

const findX = (arrayBranches, branche) => arrayBranches.indexOf(branche)

const findY = (grid, gitFlow, commit) => {
  const yParent = getParent(grid, gitFlow, commit).filter(val => val !== -1)[0]

  if (commit.otherParents.length > 0) {
    const yOtherParent = getOtherParent(grid, gitFlow, commit).filter(val => val !== -1)[0]

    if (yOtherParent > yParent) {
      return yOtherParent + 1
    }
  }
  return yParent + 1
}

const checkBranches = (gitFlow, oldGitFlow) => {
  if (Object.keys(gitFlow.graph.branches).length > Object.keys(oldGitFlow.graph.branches).length) {
    return true
  }
  return false
}

const checkCountRows = (gitFlow, oldGitFlow) => {
  if (Object.keys(gitFlow.graph.commits).length > Object.keys(oldGitFlow.graph.commits).length) {
    return true
  }
  return false
}

const getLinks = (commit) => {
  const links = [commit.parent[0]]
  if (commit.otherParents[0]) {
    return utils.immutablePush(links, commit.otherParents[0])
  }
  return links
}

const linkToParent = (grid, commit, links) => {
  links.map((parent) => {
    const coordonateParent = grid.map((columns, indexColumns) => {
      const indexRow = columns.findIndex(rows => rows.commit === parent)
      return {
        columns: indexColumns,
        rows: indexRow
      }
    }).filter(val => val.rows !== -1)
    if (coordonateParent[0].rows === -1) { return null }
    grid[coordonateParent[0].columns][coordonateParent[0].rows].links.push(commit)
  })
  return grid
}

const addCell = (grid, numCommit, commit, x, y) => {
  const links = getLinks(commit)
  const cell = { commit: numCommit, links, branch: commit.branches[0] }
  if (grid[x].length < y) {
    const diff = y - grid[x].length
    for (let i = 0; i < diff; i++) {
      const obj = {}
      grid[x].push(obj)
    }
  }

  grid[x][y] = cell
  return grid
}

const addColumn = (oldGrid, index, deletecount, nameBranch) => utils.immutableSplice(oldGrid, index, deletecount, nameBranch)

const addRow = (column, row) => utils.immutablePush(column, row)

const countCommits = grid => grid.reduce((a, b) => a + b.filter(objet => objet.commit !== undefined).length, 0)

const editRows = (grid, gitFlow, oldGitFlow, arrayBranches) => {
  if (checkCountRows(gitFlow, oldGitFlow)) {
    const count = Object.keys(gitFlow.graph.commits).length - countCommits(grid)
    for (let i = 1; i < count + 1; i++) {
      const commit = gitFlow.graph.commits[Object.keys(gitFlow.graph.commits)[Object.keys(gitFlow.graph.commits).length - i]]
      const numCommit = Object.keys(gitFlow.graph.commits)[Object.keys(gitFlow.graph.commits).length - i]
      const x = findX(arrayBranches, commit.branches[0])
      const y = findY(grid, gitFlow, commit)
      grid = addCell(grid, numCommit, commit, x, y)
    }
    return grid
  }
  return grid
}

const editColumns = (oldGrid, gitFlow, oldGitFlow, arrayBranches, indexNewBranch) => {
  if (arrayBranches.length > oldGrid.length) {
    const newGrid = addColumn(oldGrid, indexNewBranch, 0, [])
    return newGrid
  }
  return oldGrid
}

const editGrid = (oldGrid, gitFlow, oldGitFlow, arrayBranches, indexNewBranch) => {
  const gridColumns = editColumns(oldGrid, gitFlow, oldGitFlow, arrayBranches, indexNewBranch)
  const finalGrid = editRows(gridColumns, gitFlow, oldGitFlow, arrayBranches)
  return finalGrid
}

const editBranches = (gridBranches, gitFlow, oldGitFlow) => {
  if (checkBranches(gitFlow, oldGitFlow)) {
    let array = []
    const nameBranch = Object.keys(gitFlow.graph.branches).pop()
    if (nameBranch.includes('feature')) { array = utils.immutableUnshift(gridBranches, nameBranch) }
    if (nameBranch.includes('release')) {
      const master = gridBranches.indexOf('master')
      array = utils.immutableSplice(gridBranches, master, 0, nameBranch)
    }
    if (nameBranch.includes('hotfix')) { array = utils.immutablePush(gridBranches, nameBranch) }
    const index = array.indexOf(nameBranch)
    return {
      array,
      index
    }
  }

  return {
    array: gridBranches,
    index: 0
  }
}

const grid = (oldGrid, gitFlow, oldGitFlow) => {
  if (JSON.stringify(gitFlow) === JSON.stringify(oldGitFlow)) { return oldGrid }
  const arrayBranches = editBranches(oldGrid.branches, gitFlow, oldGitFlow)
  return Object.assign({}, oldGrid, {
    branches: arrayBranches.array,
    columns: editGrid(oldGrid.columns, gitFlow, oldGitFlow, arrayBranches.array, arrayBranches.index)
  })
}

export default grid
