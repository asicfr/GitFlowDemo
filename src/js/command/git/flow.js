import feature from './flow/feature'
import release from './flow/release'
import hotfix from './flow/hotfix'

const functions = {
  feature,
  release,
  hotfix
}

const listFlow = (command, gitflow) => Object.keys(gitflow.graph.branches)
  .filter(branch => branch.includes(command.words[2])).reduce((acc, cur) => `${acc}, \n ${cur}`)

const flow = (command, gitflow) => {
  const { words } = command
  const fn = functions[words[2]]
  try {
    if (command.words.length === 3) {
      return Object.assign({}, gitflow, {
        console: listFlow(command, gitflow)
      })
    }
    return fn(command, gitflow)
  } catch (err) {
    throw new Error('Invalid command')
  }
}

export default flow
