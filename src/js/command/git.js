import flow from './git/flow'
import commit from './git/commit'
import checkout from './git/checkout'
import branch from './git/branch'
import merge from './git/merge'

const functions = {
  flow,
  commit,
  checkout,
  branch,
  merge
}

const git = (command, gitflow) => {
  const { words } = command
  const fn = functions[words[1]]
  if (words[0] === 'Coucou') { throw new Error('Coucou') }
  if (!fn) {
    throw new Error('Invalid git command')
  }
  return fn(command, gitflow)
}

export default git
