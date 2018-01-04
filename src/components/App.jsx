import React, {Component} from 'react'
import '../css/App.css'
import Console from './console/Console.jsx'
import Vue from './graphic/Vue.jsx'
import controller from '../js/controller.js'

class App extends Component {
 
  constructor(props) {
        super(props)
        this.state = {
          txt: '',
          graph: controller.init(),
        }      
   
  }

  handleConsole = (textValue) => {
    const dataflow = controller.dataControl(textValue, this.state.graph)
    this.setState({
      txt: dataflow.console,
      graph: dataflow.graph
    })
  }

  render() {
    return (
      <div className="App">
        <Console onConsole={this.handleConsole} command={this.state.txt}/>
        <Vue graph={this.state.graph}/>
      </div>
    )
  }
}

export default App;
