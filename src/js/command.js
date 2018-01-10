import git from './command/git'

const command = (comm, graph) => {
  const { words } = comm
  if (words[0] === 'git') {
    return git(comm, graph)
  } else if (words === '') {
    throw new Error('')
  } else {
    throw new Error('Invalid command')
  }
}

export default command
