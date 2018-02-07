import flow from './flow'

const feature = (command, gitflow) => {
  const { words } = command
  const nameFlow = words[2]
  const action = words[3]
  const nameFeature = `feature/${words[4]}`
  const branchDependance = 'develop'
  return flow(gitflow, nameFlow, action, nameFeature, branchDependance)
}

export default feature
