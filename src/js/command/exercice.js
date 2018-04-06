import exercice1 from './exercice/exercice1'

const num = {
  1: exercice1
}
const exercice = (command) => {
  const { words } = command
  if (words.length === 1) { throw new Error('Please choose exercice') }
  if (!num[words[1]]) { throw new Error('Please choose exercice 1-10') }
  return num[words[1]]
}

export default exercice
