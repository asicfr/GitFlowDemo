import flow from './flow'

const release = (command, gitflow) => {
  const { words } = command
  const nameFlow = words[2]
  const action = words[3]
  const nameRelease = `release/${words[4]}`
  const branchDependance = 'develop'
  return flow(gitflow, nameFlow, action, nameRelease, branchDependance)
}

export default release
