import flow from './flow'

const hotfix = (command, gitflow) => {
  const { words } = command
  const nameFlow = words[2]
  const action = words[3]
  const nameHotfix = `hotfix/${words[4]}`
  const branchDependance = 'master'
  return flow(gitflow, nameFlow, action, nameHotfix, branchDependance)
}

export default hotfix
