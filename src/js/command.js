import git from './command/git'

const command = (console, gitflow) => {
  const { words } = console
  if (words[0] === 'Coucou') { throw new Error('Bonjour toi :)') }
  if (words[0] === 'git') {
    return git(console, gitflow)
  } else if (words[0] === '') {
    throw new Error('')
  } else {
    throw new Error('Invalid command')
  }
}

export default command
