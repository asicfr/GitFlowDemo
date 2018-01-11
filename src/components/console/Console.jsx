import React, { Component } from 'react'
import PropTypes from 'prop-types'
import HeadersUi from './Headers'
import Body from './Body'
import Input from './Input'

class Console extends Component {
  constructor(props) {
    super(props)
    this.state = {
      arrayText: [],
      historyCommand: []
    }
  }

  componentWillReceiveProps(newProps) {
    this.state.arrayText.push(newProps.console)
  }

    handleConsole = (textValue) => {
      this.state.historyCommand.push(textValue)
      this.props.onConsole(textValue)
    }

    render() {
      return (
        <div className="App-Console">
          <HeadersUi />
          <Body command={this.state.historyCommand} console={this.state.arrayText} />
          <Input data={this.state.historyCommand} onInput={this.handleConsole} />
          <div className="github"> <a rel="stylesheet" href="https://github.com/asicfr/GitFlowDemo">GitHub repository</a></div>
        </div>
      )
    }
}

Console.propTypes = {
  onConsole: PropTypes.func
}

Console.defaultProps = {
  onConsole: () => {}
}

export default Console
