import flow from './git/flow'
import commit from './git/commit'
import checkout from './git/checkout'

const functions = {
  flow,
  commit,
  checkout
}

const git = (command, graph) => {
  const { words } = command
  const fn = functions[words[1]]
  if (!fn) {
    throw new Error('Invalid git command')
  }
  return fn(command, graph)
}

export default git
