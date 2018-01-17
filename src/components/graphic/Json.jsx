
import React, { Component } from 'react'
import ExpansionPanel, {
  ExpansionPanelSummary,
  ExpansionPanelDetails
} from 'material-ui/ExpansionPanel'
import Typography from 'material-ui/Typography'
import ExpandMoreIcon from 'material-ui-icons/ExpandMore'

export class Json extends Component {
  constructor(props) {
    super(props)
    this.state = {
      graph: this.props.graph
    }
  }

  componentWillReceiveProps(newProps) {
    this.setState({
      graph: newProps.graph
    })
  }

  commitsDisplay() {
    return Object.keys(this.state.graph.commits).map((key, i) => (<li key={i}>{key} : {JSON.stringify(this.state.graph.commits[key])}</li>))
  }

  branchDisplay() {
    return Object.keys(this.state.graph.branches).map((key, i) => (<li key={i}>{key} : {JSON.stringify(this.state.graph.branches[key])}</li>))
  }

  resteDisplay() {
    return (
      <div>
        <li> currentBranch : {this.state.graph.currentBranch}</li>
        <li> currentCommit : {this.state.graph.currentCommit}</li>
        <li> lastCommit : {this.state.graph.lastCommit}</li>
      </div>
    )
  }

  displayJson() {
    return (
      <div>
        <div>
        commits :
          {this.commitsDisplay()}
        </div>
        <div>
        branches :
          {this.branchDisplay()}
        </div>
        <div>
        reste :
          {this.resteDisplay()}
        </div>
      </div>)
  }

  render() {
    const displayJson = this.displayJson()

    const styles = {
      title: {
        fontSize: '2vh'
      },
      text: {
        textAlign: 'center',
        margin: '0 auto',
        fontSize: '2vh'
      }
    }
    return (

      <div>

        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={styles.title}>JSON du graph</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={styles.text}>{displayJson}</Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>

      </div>
    )
  }
}

export default Json
