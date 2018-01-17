import start from './flowaction/start'
import finish from './flowaction/finish'

const command = {
  start,
  finish
}

const flow = (gitflow, nameFlow, action, nameBranch, branchDependance) => {
  try {
    return command[action](gitflow, nameFlow, action, nameBranch, branchDependance)
  } catch (err) {
    return gitflow
  }
}


export default flow
