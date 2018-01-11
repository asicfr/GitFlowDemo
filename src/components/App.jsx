import React, { Component } from 'react'
import '../css/App.css'
import ConsoleUi from './console/Console'
import VueUi from './graphic/Vue'
import controller from '../js/controller'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      gitflow: controller.init()
    }
  }
  handleConsole = (command) => {
    const dataflow = controller.dataControl(command, this.state.gitflow)
    this.setState({
      gitflow: dataflow
    })
  }

  render() {
    return (
      <div className="App">
        <ConsoleUi onConsole={this.handleConsole} console={this.state.gitflow.console} />
        <VueUi txt={this.state.gitflow.console} graph={this.state.gitflow.graph} />
      </div>
    )
  }
}

export default App
