import exercice1 from './exercice/exercice1'
import analyzeCommand from '../command'
import grid from '../grid'

const num = {
  1: exercice1
}


const exercice = (command, gitflow, exo, gridGit) => {
  if (exo) {
    const gitFlowObject = analyzeCommand(command, gitflow)
    if (JSON.stringify(num[exo].end.gitFlowObject.graph) === JSON.stringify(gitFlowObject.graph)) {
      return num[exo].end
    }
    const newGrid = grid(gridGit, gitFlowObject, gitflow)
    return {
      gitFlowObject,
      gridGit: newGrid,
      exercice: exo
    }
  }
  const { words } = command
  if (words.length === 1) { throw new Error('Please choose exercice') }
  if (!num[words[1]]) { throw new Error('Please choose exercice 1-10') }
  return num[words[1]].start
}

export default exercice
