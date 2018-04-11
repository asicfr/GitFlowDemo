import git from './command/git'

const command = (console, gitflow) => {
  const { words } = console
  if (words[0].toUpperCase() === 'Coucou'.toUpperCase()) { throw new Error('Bonjour toi :)') }
  if (words[0].toUpperCase() === 'Sun7'.toUpperCase()) { throw new Error('Un petit Boston ?') }
  if (words[0].toUpperCase() === 'Netoun'.toUpperCase()) { throw new Error('Tu connais mon créateur ?') }
  if (words[0] === 'git') {
    return git(console, gitflow)
  } else if (words[0] === '') {
    throw new Error('')
  } else {
    throw new Error('Invalid command')
  }
}

export default command
