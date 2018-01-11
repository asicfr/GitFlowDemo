import React, { Component } from 'react'
import '../../css/Flow.css'
import CommitUi from './Commit'
import JsonUi from './Json'

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

  graphFn() {
    return Object.keys(this.state.graph.commits).map((commit, i) => (
      <CommitUi key={i} nameCommit={commit} others={this.state.graph.commits[commit]} />
    ))
  }

  render() {
    const graph = this.graphFn()
    return (
      <div className="App-Graph">
        <JsonUi graph={this.state.graph} />
        {graph}
      </div>
    )
  }
}

export default Vue
