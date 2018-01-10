import feature from './flow/feature'
import release from './flow/release'

const functions = {
  feature,
  release
}

const flow = (command, graph) => {
  const { words } = command
  const fn = functions[words[2]]
  if (!fn) {
    throw new Error('Invalid command')
  }

  return fn(command, graph)
}

export default flow
