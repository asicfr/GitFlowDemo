import React, { Component } from 'react'
import '../css/App.css'
import ConsoleUi from './console/Console'
import VueUi from './graphic/Vue'
import controller from '../js/controller'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitflow: controller.init().gitflow,
      grid: controller.init().gridInit,
      exercice: ''
    }
  }
  handleConsole = (command) => {
    const dataflow = controller.dataControl(command, this.state.gitflow, this.state.grid, this.state.exercice)
    console.log(dataflow.gitFlowObject)
    this.setState({
      gitflow: dataflow.gitFlowObject,
      grid: dataflow.gridGit,
      exercice: dataflow.exercice
    })
  }

  render() {
    return (
      <div className="App">
        <ConsoleUi
          currentBranch={this.state.gitflow.graph.currentBranch}
          onConsole={this.handleConsole}
          console={this.state.gitflow.console}
        />
        <VueUi
          txt={this.state.gitflow.console}
          graph={this.state.gitflow.graph}
          grid={this.state.grid}
        />
      </div>
    )
  }
}

export default App
