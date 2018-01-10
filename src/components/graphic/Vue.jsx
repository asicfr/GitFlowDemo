import React, { Component } from 'react'
import '../../css/Flow.css'

class Vue extends Component {
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

  branchCommit = (graph, nameBranch) => {
    let margin = 8
    return graph.tree
      .filter(c => c.branch.includes(nameBranch))
      .map((c, i) => {
        const divStyle = {
          marginTop: `${margin}%`
        }
        margin += 4
        return (
          <div style={divStyle} className="commit" key={i}>
            <div className="commitText">{c.commit}</div>
          </div>
        )
      })
  }

  fnGraph() {
    const arrayBranch = Object.entries(this.state.graph.branch)
    return arrayBranch.map((branch) => {
      const nameBranch = branch[0]
      const nameClass = `branch ${nameBranch}`
      const divStyle = {
        marginTop: `${0}%`
      }
      return (
        <div className={nameClass} key={nameBranch}>
          <div className="trait" />
          <h1>{nameBranch}</h1>
          <div style={divStyle} />
          {this.branchCommit(this.state.graph, nameBranch)}
        </div>
      )
    })
  }

  render() {
    const graphRender = this.fnGraph()
    return (
      <div className="App-Graph">
        {graphRender}
      </div>
    )
  }
}

export default Vue
